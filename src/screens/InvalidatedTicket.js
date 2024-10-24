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


const InvalidedTicket = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const route = useRoute();

    const { data, scanParams } = route.params;

    // console.log('data in: ', data,);



    const [errorMessage, setErrorMessage] = useState("Nothing");

    // Update state when data changes
    useEffect(() => {
        if (data) {
            setErrorMessage(data.message);
        }
    }, [data]);

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
                    }]}>Invalid Ticket</Text>
                </View>

                <ScrollView>

                    {/* Invalid Section */}
                    <View style={{ backgroundColor: '#FEECEB', padding: 10, borderRadius: 10, alignItems: 'center', marginVertical: 10 }}>
                        <Icon name="close" size={25} color="#E02047" />
                        <Text style={[style.b18, { color: '#E02047', fontSize: 18, fontWeight: '600', marginTop: 5 }]}>Invalid</Text>
                    </View>


                    <View
                        style={{
                            backgroundColor: '#F0F0F0',
                            padding: 15,
                            borderRadius: 10,
                            width: width - 40,
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >

                        <Text style={{ color: theme.txt, fontSize: 16, marginBottom: 8 }}>
                            Ticket ID: {data?.ticketDetails?.ticket?.code}
                        </Text>
                    </View>
                    <Text
                        style={{
                            color: theme.txt,
                            fontSize: 16,
                            textAlign: 'center',
                            paddingHorizontal: 20,
                            marginBottom: 30,
                        }}
                    >
                        {errorMessage}
                    </Text>



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
                        navigation.replace('Scanner', { ...scanParams, agenda: null });
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

export default InvalidedTicket;
