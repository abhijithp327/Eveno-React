import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppBar } from '@react-native-material/core';
import IonIcon from 'react-native-vector-icons/Ionicons';


const ValidatedTicket = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const route = useRoute();

    const { data } = route.params;
    console.log('data: ', data);

    const [isTicketValid, setIsTicketValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Update state when data changes
    // useEffect(() => {
    //     if (data) {
    //         setIsTicketValid(data.isValid);
    //         setErrorMessage(data.message);
    //     }
    // }, [data]);

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
                    }]}>Validate Ticket</Text>
                </View>

                <ScrollView>

                    {/* Validated Section */}
                    <View style={{ backgroundColor: '#E6FFEC', padding: 5, borderRadius: 20, alignItems: 'center', marginVertical: 10 }}>
                        <Icon name="check-circle" size={25} color="#00C853" />
                        <Text style={[style.b18, { color: '#00C853' }]}>Validated</Text>
                    </View>

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
                        <Image
                            source={require('../../assets/image/qr.png')}
                            style={{ width: 150, height: 150, marginBottom: 15 }}
                        />
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
                                Live Music By Melrick @ Stone
                            </Text>
                            {/* <Text style={{ color: Colors.disable, fontSize: 14, marginTop: 5 }}>
                                <Icon name="map-marker" size={14} color={Colors.disable} /> Stage Name, Bengaluru KA
                            </Text> */}
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
                            <Text style={[style.b12, { color: theme.txt, fontSize: 14, fontWeight: '600' }]}>Platinum</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={[style.r12, { color: Colors.active, fontSize: 14 }]}>Price</Text>
                            <Text style={[style.b12, { color: Colors.default, fontSize: 14, fontWeight: '600' }]}>AED 30</Text>
                        </View>
                    </View>
                    {/* Dates Section */}
                    <View
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            padding: 15,
                            marginBottom: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderColor: Colors.secondary1,
                            borderWidth: 2,
                        }}
                    >
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon name="calendar" size={16} color={Colors.disable} />
                            <Text style={[style.r14, { color: Colors.disable, fontSize: 14, marginTop: 5 }]}>Start Date</Text>
                            <Text style={[style.b14, { color: theme.txt, fontSize: 14, marginTop: 3 }]}>Jul 2, 8:00 PM</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Icon name="calendar" size={16} color={Colors.disable} />
                            <Text style={[style.r14, { color: Colors.disable, fontSize: 14, marginTop: 5 }]}>End Date</Text>
                            <Text style={[style.b14, { color: theme.txt, fontSize: 14, marginTop: 3 }]}>Jul 2, 8:00 PM</Text>
                        </View>
                    </View>
                    {/* Email Section */}
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
                            Leslie Alexander
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
                                lesliealexander@gmail.com
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
                                +242 2929 91001
                            </Text>
                        </View>
                    </View>
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
                    onPress={() => navigation.navigate('ScanEvent')}
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

export default ValidatedTicket;
