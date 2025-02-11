import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch } from 'react-redux';
import { getEventTicketDetails } from '../redux/features/eventSlice';
import { Image } from 'react-native-elements';
import appConfig from '../config/appConfig';
import EventImg from '../../assets/image/m18.png';
import { formatDate } from '../utils/formatDate';

const ETicket = () => {

    const colors = [
        { "id": 1, "color": "#333333", "name": "Charcoal Gray" },
        { "id": 2, "color": "#006699", "name": "Deep Sky Blue" },
        { "id": 3, "color": "#990000", "name": "Dark Red" },
        { "id": 4, "color": "#009933", "name": "Forest Green" },
        { "id": 5, "color": "#663399", "name": "Rebecca Purple" },
        { "id": 6, "color": "#FF6600", "name": "Vivid Orange" },
        { "id": 7, "color": "#006600", "name": "Green" },
        { "id": 8, "color": "#FF3399", "name": "Hot Pink" },
        { "id": 9, "color": "#003366", "name": "Navy Blue" },
        { "id": 10, "color": "#CC0000", "name": "Crimson Red" },
        { "id": 11, "color": "#3366CC", "name": "Dodger Blue" },
        { "id": 12, "color": "#990066", "name": "Dark Magenta" },
        { "id": 13, "color": "#FFCC00", "name": "Saffron Yellow" },
        { "id": 14, "color": "#0099CC", "name": "Sky Blue" },
        { "id": 15, "color": "#FF3366", "name": "Raspberry Pink" },
        { "id": 16, "color": "#a67c00", "name": "Golden" },
        { "id": 17, "color": "#ffffff", "name": "White" },
    ];


    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const dispatch = useDispatch();
    const route = useRoute();
    const { orderId } = route.params;
    console.log('orderId : ', orderId);

    const [ticketData, setTicketData] = useState(null);
    const [currentQRIndex, setCurrentQRIndex] = useState(0);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await dispatch(getEventTicketDetails(orderId));
                const data = response.payload.result;
                setTicketData(data);
            } catch (error) {
                console.log('error : ', error);
            }
        };
        fetchBookingDetails();
    }, [orderId]);

    // Create QR code data string for the current QR code
    const qrCodeData = ticketData ? JSON.stringify({
        ticketId: ticketData.orderticket_id,
        eventId: ticketData.event_id,
        eventTitle: ticketData.event_title,
        qrCode: ticketData.qrcodetickets[currentQRIndex]?.qrcode || ''
    }) : '';

    // Get the first event image URL if available
    const eventImageUrl = ticketData?.eventImages?.[0]?.name
        ? `${appConfig.server.imageBaseUrl}${ticketData.eventImages[0].name}`
        : EventImg;

    // Handle showing next QR code
    const showNextQR = () => {
        if (currentQRIndex < ticketData.ticket_qr_codes.length - 1) {
            setCurrentQRIndex(currentQRIndex + 1);
        }
    };

    // Handle showing previous QR code
    const showPrevQR = () => {
        if (currentQRIndex > 0) {
            setCurrentQRIndex(currentQRIndex - 1);
        }
    };

    // Get current ticket details
    const getCurrentTicketDetails = () => {
        if (!ticketData?.qrcodetickets?.[currentQRIndex]) return null;
        return ticketData.qrcodetickets[currentQRIndex];
    };

    const getColorName = (hexColor) => {
        const colorObj = colors.find(c => c.color.toLowerCase() === hexColor?.toLowerCase());
        return colorObj ? colorObj.name : 'N/A';
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 10, marginBottom: 16 }]}>
                {/* Header Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BottomNavigator')}
                        style={{ paddingRight: 8 }}
                    >
                        <IonIcon name="arrow-back" color={theme.txt} size={28} />
                    </TouchableOpacity>
                    <Text style={[style.apptitle, {
                        color: theme.txt,
                        marginLeft: 4
                    }]}>E-Ticket Details</Text>
                </View>

                <ScrollView>
                    {/* Event Details Section */}
                    {ticketData && (
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: Colors.secondary,
                                borderRadius: 10,
                                padding: 10,
                                alignItems: 'center',
                                marginBottom: 20,
                                borderColor: Colors.secondary,
                                borderWidth: 3,
                            }}
                        >
                            {eventImageUrl ? (
                                <Image
                                    source={{ uri: eventImageUrl }}
                                    style={{ width: 60, height: 60, borderRadius: 10, marginRight: 15 }}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 10,
                                    marginRight: 15,
                                    backgroundColor: Colors.border,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <IonIcon name="image" size={24} color={Colors.disable} />
                                </View>
                            )}
                            <View style={{ flex: 1 }}>
                                <Text style={[style.title, { color: theme.txt, fontSize: 16, fontWeight: '600' }]}>
                                    {ticketData.event_title}
                                </Text>
                                <Text style={{ color: Colors.disable, fontSize: 14, marginTop: 5 }}>
                                    <IonIcon name="location" size={14} color={Colors.disable} />  {ticketData.venue_name}
                                </Text>
                                <Text style={{ color: Colors.disable, fontSize: 14, marginTop: 5 }}>
                                    <IonIcon name="calendar" size={14} color={Colors.disable} />  {formatDate(ticketData.performance_startdatetime)}
                                </Text>
                            </View>
                        </View>
                    )}

                    {/* QR Code Section */}
                    {ticketData && (
                        <View
                            style={{
                                backgroundColor: '#FFF',
                                borderRadius: 10,
                                padding: 20,
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                shadowRadius: 1.41,
                                elevation: 2,
                                marginBottom: 20,
                            }}
                        >
                            <QRCode
                                value={qrCodeData}
                                size={150}
                                color="black"
                                backgroundColor="white"
                            />
                            <Text style={[style.b14, {
                                color: Colors.active,
                                marginTop: 10,
                                textAlign: 'center'
                            }]}>
                                {'*****' + ticketData.ticket_qr_codes[currentQRIndex].slice(-5)}
                            </Text>

                            {/* QR Navigation */}
                            {ticketData.ticket_qr_codes.length > 1 && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (currentQRIndex > 0) {
                                                setCurrentQRIndex(currentQRIndex - 1);
                                            }
                                        }}
                                        disabled={currentQRIndex === 0}
                                        style={{ padding: 10 }}
                                    >
                                        <IonIcon
                                            name="chevron-back"
                                            size={24}
                                            color={currentQRIndex === 0 ? Colors.disable : theme.txt}
                                        />
                                    </TouchableOpacity>

                                    <Text style={{ color: theme.txt, fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 }}>
                                        {currentQRIndex + 1}/{ticketData.ticket_qr_codes.length}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            if (currentQRIndex < ticketData.ticket_qr_codes.length - 1) {
                                                setCurrentQRIndex(currentQRIndex + 1);
                                            }
                                        }}
                                        disabled={currentQRIndex === ticketData.ticket_qr_codes.length - 1}
                                        style={{ padding: 10 }}
                                    >
                                        <IonIcon
                                            name="chevron-forward"
                                            size={24}
                                            color={currentQRIndex === ticketData.ticket_qr_codes.length - 1 ? Colors.disable : theme.txt}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    )}

                    {/* Customer Details Section */}
                    {ticketData && ticketData.qrcodetickets && (
                        <View
                            style={{
                                backgroundColor: Colors.secondary,
                                borderRadius: 10,
                                padding: 15,
                                marginBottom: 20,
                                borderColor: Colors.secondary,
                                borderWidth: 2,
                            }}
                        >
                            <Text style={[style.b16, {
                                color: theme.txt,
                                fontSize: 16,
                                fontWeight: '600',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: Colors.border,
                                paddingBottom: 8
                            }]}>
                                {ticketData.user_name}
                            </Text>

                            <View style={{ marginBottom: 12 }}>
                                <Text style={[style.r12, {
                                    color: Colors.disable,
                                    fontSize: 12,
                                    marginBottom: 4
                                }]}>
                                    Ticket/Seat
                                </Text>
                                <Text style={[style.b12, {
                                    color: theme.txt,
                                    fontSize: 14
                                }]}>
                                    {getCurrentTicketDetails()?.ticket_name || 'N/A'}
                                </Text>
                            </View>

                            <View style={{ marginBottom: 12 }}>
                                <Text style={[style.r12, {
                                    color: Colors.disable,
                                    fontSize: 12,
                                    marginBottom: 4
                                }]}>
                                    Price
                                </Text>
                                <Text style={[style.b12, {
                                    color: theme.txt,
                                    fontSize: 14
                                }]}>
                                    {getCurrentTicketDetails()?.price || 0} AED
                                </Text>
                            </View>

                            <View>
                                <Text style={[style.r12, {
                                    color: Colors.disable,
                                    fontSize: 12,
                                    marginBottom: 4
                                }]}>
                                    Color
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 4,
                                        backgroundColor: getCurrentTicketDetails()?.bg_color || Colors.secondary,
                                        borderWidth: 1,
                                        borderColor: '#000',
                                        marginRight: 8
                                    }} />
                                    <Text style={[style.b12, {
                                        color: theme.txt,
                                        fontSize: 14
                                    }]}>
                                        {getColorName(getCurrentTicketDetails()?.bg_color)}
                                    </Text>
                                </View>
                            </View>

                            {/* Ticket Navigation */}
                            {ticketData.qrcodetickets.length > 1 && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={showPrevTicket}
                                        disabled={selectedTicketIndex === 0}
                                        style={{ padding: 10 }}
                                    >
                                        <IonIcon
                                            name="chevron-back"
                                            size={24}
                                            color={selectedTicketIndex === 0 ? Colors.disable : theme.txt}
                                        />
                                    </TouchableOpacity>

                                    <Text style={{ color: theme.txt, fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 }}>
                                        Ticket {selectedTicketIndex + 1}/{ticketData.qrcodetickets.length}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={showNextTicket}
                                        disabled={selectedTicketIndex === ticketData.qrcodetickets.length - 1}
                                        style={{ padding: 10 }}
                                    >
                                        <IonIcon
                                            name="chevron-forward"
                                            size={24}
                                            color={selectedTicketIndex === ticketData.qrcodetickets.length - 1 ? Colors.disable : theme.txt}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    )}
                </ScrollView>

                {/* Action Buttons */}
                <View style={{ alignItems: 'center', backgroundColor: Colors.secondary, marginBottom: 16 }}>
                    <TouchableOpacity
                        style={{
                            width: width - 40,
                            paddingVertical: 11,
                            backgroundColor: Colors.default,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginBottom: 10,
                        }}
                        onPress={() => {
                            navigation.replace('BottomNavigator');
                        }}
                    >
                        <Text style={[style.btntxt, { color: Colors.secondary }]}>Download Ticket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: width - 40,
                            paddingVertical: 11,
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            borderColor: Colors.default,
                            borderWidth: 1,
                            alignItems: 'center'
                        }}
                        onPress={() => {
                            navigation.replace('BottomNavigator');
                        }}
                    >
                        <Text style={[style.btntxt, { color: Colors.active }]}>Back To Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ETicket;
