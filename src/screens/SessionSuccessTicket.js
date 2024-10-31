import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, AppBar } from '@react-native-material/core';
import IonIcon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';
import { updateSessionAttendance } from '../redux/features/eventSlice';
import { useDispatch } from 'react-redux';


const AgendaItem = ({ agenda, onPress, disabled, loading }) => (
    <View
        style={{
            backgroundColor: agenda.isAttended ? Colors.sucessbg : Colors.secondary,
            borderRadius: 12,
            padding: 15,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: agenda.isAttended ? Colors.success : Colors.secondary1,
        }}
    >
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View style={{ flex: 1 }}>
                <Text style={[style.r12, {
                    color: Colors.active,
                    fontSize: 15,
                    fontWeight: '500',
                    marginBottom: 6
                }]}>
                    {agenda.agenda_title}
                </Text>

                {/* Status Badge */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon
                        name={agenda.isAttended ? 'check-circle' : 'clock-o'}
                        size={16}
                        color={agenda.isAttended ? Colors.success : Colors.orange}
                        style={{ marginRight: 6 }}
                    />
                    <Text style={{
                        color: agenda.isAttended ? Colors.success : Colors.orange,
                        fontSize: 13,
                        fontWeight: '500',
                        fontFamily: 'Urbanist-Regular',
                    }}>
                        {agenda.isAttended ? 'Attended' : 'Pending'}
                    </Text>
                </View>
            </View>

            {!agenda.isAttended && (
                <TouchableOpacity
                    onPress={onPress}
                    disabled={disabled || loading}
                    style={{
                        backgroundColor: Colors.default,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        opacity: loading ? 0.7 : 1,
                    }}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color={Colors.default} style={{ marginRight: 6 }} />
                    ) : (
                        <Icon
                            name="check"
                            size={12}
                            color="#FFF"
                            style={{ marginRight: 6 }}
                        />
                    )}
                    <Text style={{
                        color: '#FFF',
                        fontSize: 13,
                        fontWeight: '600',
                        fontFamily: 'Urbanist-Bold',
                    }}>
                        {loading ? 'Marking...' : 'Mark Attended'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    </View>
);

const SessionSuccessTicket = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const route = useRoute();
    const dispatch = useDispatch();

    const { data: initialData, qrCodeData } = route.params;
    const [data, setData] = useState(initialData);
    const [loadingStates, setLoadingStates] = useState({});


    const updateAttendance = async (code, agendaId) => {
        setLoadingStates(prev => ({ ...prev, [agendaId]: true }));
        const requestData = {
            code: code,
            agenda_id: agendaId
        };

        try {
            const response = await dispatch(updateSessionAttendance(requestData));
            if (response.payload && response.payload.success) {

                setData(prevData => ({
                    ...prevData,
                    agendas: prevData.agendas.map(agenda =>
                        agenda.agenda_id === agendaId
                            ? { ...agenda, isAttended: true }
                            : agenda
                    )
                }));
                Alert.alert('Success', response.payload.message);
            }
        } catch (error) {
            console.log('error', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            // Clear loading state
            setLoadingStates(prev => ({ ...prev, [agendaId]: false }));
        }
    };


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 10, marginBottom: 16 }]}>

                {/* Modified Header Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingHorizontal: 10,
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
                    }]}>Session Ticket</Text>
                </View>

                <ScrollView>


                    {/* QR Code Section */}
                    <View style={{
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
                    }}>
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
                            {'*****' + qrCodeData.slice(-5)}
                        </Text>
                    </View>

                    {/* Event Details Section */}
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
                        <Image
                            source={require('../../assets/image/m16.png')}
                            style={{ width: 60, height: 60, borderRadius: 10, marginRight: 15 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={[style.title, { color: theme.txt, fontSize: 16, fontWeight: '600' }]}>
                                {data.event_title}
                            </Text>
                            {/* <Text style={{ color: Colors.disable, fontSize: 14, marginTop: 5 }}>
                                <Icon name="map-marker" size={14} color={Colors.disable} /> Stage Name, Bengaluru KA
                            </Text> */}
                        </View>
                    </View>

                    {/* Ticket Info Section */}
                    <View style={{
                        backgroundColor: Colors.secondary,
                        borderRadius: 10,
                        padding: 15,
                        marginBottom: 20,
                        borderColor: Colors.secondary1,
                        borderWidth: 2,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active, }]}>Type</Text>
                            <Text style={[style.b12, { color: theme.txt, fontSize: 14, fontWeight: '600' }]}>
                                {data.ticket_name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active }]}>Ticket ID</Text>
                            <Text style={[style.b12, { color: Colors.default, fontWeight: '600' }]}>
                                #{data.ticket_id}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active, }]}>Order ID</Text>
                            <Text style={[style.b12, { color: Colors.default }]}>
                                #{data.order_id}
                            </Text>
                        </View>
                    </View>

                    {/* Agendas Section */}
                    {data.agendas && data.agendas.length > 0 && (
                        <View style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 15,
                            padding: 20,
                            marginBottom: 20,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 15,
                            }}>
                                <Icon
                                    name="list-ul"
                                    size={20}
                                    color={Colors.active}
                                    style={{ marginRight: 8 }}
                                />
                                <Text style={[style.b16, {
                                    color: theme.txt,
                                    fontSize: 18,
                                    fontWeight: '600',
                                }]}>Session Agendas</Text>
                            </View>

                            {/* Progress Summary */}
                            {/* <View style={{
                                backgroundColor: Colors.secondary1,
                                borderRadius: 10,
                                padding: 15,
                                marginBottom: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: Colors.active, fontSize: 24, fontWeight: '700' }}>
                                        {data.agendas.filter(a => a.isAttended).length}
                                    </Text>
                                    <Text style={{ color: Colors.active, fontSize: 12 }}>Attended</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: Colors.active, fontSize: 24, fontWeight: '700' }}>
                                        {data.agendas.length}
                                    </Text>
                                    <Text style={{ color: Colors.active, fontSize: 12 }}>Total Sessions</Text>
                                </View>
                            </View> */}

                            {/* Agenda Items */}
                            {data.agendas.map((agenda) => (
                                <AgendaItem
                                    key={agenda.agenda_id}
                                    agenda={agenda}
                                    onPress={() => updateAttendance(qrCodeData, agenda.agenda_id)}
                                    disabled={agenda.isAttended}
                                    loading={loadingStates[agenda.agenda_id]}
                                />
                            ))}
                        </View>
                    )}
                </ScrollView>
            </View>

            {/* Buttons */}
            < View style={{ alignItems: 'center', backgroundColor: Colors.secondary, marginBottom: 16 }}>
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
                        navigation.replace('ValidateSession', { event_id: data.event_id });
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
        </SafeAreaView >
    );
}

export default SessionSuccessTicket;
