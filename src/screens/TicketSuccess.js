import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';

const TicketSuccess = () => {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const route = useRoute();
    const { data } = route.params;

    // Create QR code data string
    const qrCodeData = JSON.stringify({
        ticketId: data.ticket.id,
        ticketName: data.ticket.ticket_name,
        eventId: data.event.id,
        eventTitle: data.event.title,
        qrCode: data.ticket.ticket_qr_code,
    });

    const renderHistoryItem = (item, index) => (
        <View
            key={index}
            style={{
                backgroundColor: Colors.secondary,
                borderRadius: 10,
                padding: 15,
                marginBottom: 10,
                borderColor: Colors.secondary1,
                borderWidth: 2,
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1 }}>
                    <Text style={[style.b14, { color: theme.txt }]}>{item.message}</Text>
                    <Text style={[style.r12, { color: Colors.disable }]}>
                        {new Date(item.datetime).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </Text>
                </View>
                <Icon
                    name={item.isSuccess ? "check-circle" : "times-circle"}
                    size={20}
                    color={item.isSuccess ? Colors.success : Colors.default}
                    style={{ marginLeft: 10 }}
                />

            </View>
        </View>
    );

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
                    }]}>Ticket Details</Text>
                </View>

                <ScrollView>
                    {/* QR Code Section */}
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
                            elevation: 0,
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
                            {'*****' + data.ticket.ticket_qr_code.slice(-5)}
                        </Text>
                    </View>

                    {/* Event Details Section */}
                    <View
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            padding: 15,
                            marginBottom: 20,
                            borderColor: Colors.secondary,
                            borderWidth: 3,
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={[style.title, {
                                color: theme.txt,
                                fontSize: 18,
                                fontWeight: '600',
                                marginBottom: 8
                            }]}>
                                {data.event.title}
                            </Text>
                            <Text style={[style.r12, {
                                color: Colors.disable,
                                fontSize: 14
                            }]}>
                                Event ID: {data.event.id}
                            </Text>
                        </View>
                    </View>

                    {/* Ticket Info Section */}
                    <View
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            padding: 15,
                            marginBottom: 20,
                            borderColor: Colors.secondary1,
                            borderWidth: 2,
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active, fontSize: 14 }]}>Type</Text>
                            <Text style={[style.b12, { color: theme.txt, fontSize: 14, fontWeight: '600' }]}>
                                {data.ticket.ticket_name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active, fontSize: 14 }]}>Price</Text>
                            <Text style={[style.b12, { color: Colors.default, fontSize: 14, fontWeight: '600' }]}>
                                AED {data.ticket.ticket_price}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.r12, { color: Colors.active, fontSize: 14 }]}>Status</Text>
                            <Text style={[style.b12, {
                                color: data.ticket.isDet ? Colors.default : Colors.success,
                                fontSize: 14,
                                fontWeight: '600'
                            }]}>
                                {data.ticket.isDet ? 'Used' : 'Valid'}
                            </Text>
                        </View>
                    </View>

                    {/* Customer Details Section */}
                    <View
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            padding: 15,
                            marginBottom: 20,
                            borderColor: Colors.secondary1,
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
                            {data.order.name}
                        </Text>
                        <View style={{ marginBottom: 12 }}>
                            <Text style={[style.r12, {
                                color: Colors.disable,
                                fontSize: 12,
                                marginBottom: 4
                            }]}>
                                Email
                            </Text>
                            <Text style={[style.b12, {
                                color: theme.txt,
                                fontSize: 14
                            }]}>
                                {data.order.email}
                            </Text>
                        </View>
                        <View>
                            <Text style={[style.r12, {
                                color: Colors.disable,
                                fontSize: 12,
                                marginBottom: 4
                            }]}>
                                Phone
                            </Text>
                            <Text style={[style.b12, {
                                color: theme.txt,
                                fontSize: 14
                            }]}>
                                {data.order.phone || 'Not provided'}
                            </Text>
                        </View>
                    </View>

                    {/* History Section */}
                    {data.history && data.history.length > 0 && (
                        <View
                            style={{
                                backgroundColor: Colors.secondary,
                                borderRadius: 10,
                                padding: 15,
                                marginBottom: 20,
                                borderColor: Colors.secondary1,
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
                                Ticket History
                            </Text>
                            {data.history.map((item, index) => renderHistoryItem(item, index))}
                        </View>
                    )}
                </ScrollView>
            </View>

            {/* Buttons */}
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
                        navigation.replace('ScanTicketDetail');
                    }}
                >
                    <Text style={[style.btntxt, { color: Colors.secondary }]}>Scan Next Tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: width - 40,
                        paddingVertical: 11,
                        backgroundColor: Colors.active,
                        borderRadius: 10,
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('BottomNavigator')}
                >
                    <Text style={[style.btntxt, { color: Colors.secondary }]}>Go Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default TicketSuccess;