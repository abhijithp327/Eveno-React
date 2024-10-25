import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import StatusBadge from '../components/StatusBadge';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ExhibitorEventDetails = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const route = useRoute();

    const { data } = route.params;

    console.log('data events details: ', data);

    return (

        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20 }]}>

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
                    }]}>Event Details</Text>
                </View>

                {/* Event Image */}
                <View style={{
                    width: '100%',
                    height: 160,
                    borderRadius: 12,
                    overflow: 'hidden',
                    marginBottom: 15,
                    marginTop: 15
                }}>
                    <Image
                        source={require('../../assets/image/m18.png')}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        resizeMode="cover"
                    />
                </View>

                {/* Event Details */}
                <View style={{ padding: 16, backgroundColor: Colors.secondary, borderRadius: 15 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 16,

                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: theme.txt,
                            fontFamily: 'Urbanist-Bold'
                        }}>Event Name</Text>
                        <View style={{
                            backgroundColor: '#E8F5E9',
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 16
                        }}>
                            <Text style={{
                                color: '#4CAF50',
                                fontSize: 12,
                                fontWeight: '500',
                                fontFamily: 'Urbanist-Bold'
                            }}>✓ Approved</Text>
                        </View>
                    </View>


                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E0E0E0'
                    }}
                        onPress={() => navigation.navigate('LeadDetails', { eventData: data })}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: theme.txt,
                            fontFamily: 'Urbanist-Bold'
                        }}>Lead details</Text>
                        <IonIcon name="arrow-forward" color={theme.txt} size={18} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: Colors.default,
                        borderRadius: 12,
                        paddingVertical: 14,
                        marginTop: 24,
                        alignItems: 'center'
                    }}
                        onPress={() => navigation.navigate('ScanExhibitor', { eventData: data })}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '600',
                            fontFamily: 'Urbanist-Bold'
                        }}>Scan Leads</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView >
    )
}

export default ExhibitorEventDetails;