import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Menu() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserFromStorage = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.error('Error fetching user from AsyncStorage:', error);
            }
        };
        getUserFromStorage();
    }, [])

    // Define role IDs
    const ROLES = {
        CUSTOMER: 1,
        ADMIN: 2,
        SUPER_ADMIN: 3,
        EXHIBITOR: 4,
        ONSITE_STAFF: 5
    };


    const menuItems = [
        {
            id: 1,
            icon: 'star',
            title: 'Manage Events (Organizer)',
            description: 'You can list, update, edit or remove events from here.',
            routeName: 'ManageEvent',
            allowedRoles: [ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 2,
            icon: 'building',
            title: 'Manage Exhibitions (Exhibitor)',
            description: 'You can list, update, edit or remove Exhibitions from here.',
            routeName: 'ManageExhibition',
            allowedRoles: [ROLES.EXHIBITOR, ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 3,
            icon: 'qrcode',
            title: 'QR Scan - (Admin)',
            description: 'Scan QR Codes of Tickets to validate or view details.',
            routeName: 'QrAdmin',
            allowedRoles: [ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 4,
            icon: 'file',
            title: 'Reports - (Admin)',
            description: 'Reports of each event and their performances.',
            routeName: 'ManageEvent',
            allowedRoles: [ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 5,
            icon: 'qrcode',
            title: 'QR Scan - (Onsite)',
            description: 'Scan QR Codes of Tickets to validate details.',
            routeName: 'ManageEvent',
            allowedRoles: [ROLES.ONSITE_STAFF, ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 6,
            icon: 'diamond',
            title: 'Affiliate Marketing - (Admin)',
            description: 'You can view all the affiliates and their performance.',
            routeName: 'ManageEvent',
            allowedRoles: [ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 7,
            icon: 'check-circle',
            title: 'Checkin & Print - (Onsite, Admin)',
            description: 'Scan QR Codes of Tickets to validate details.',
            routeName: 'ManageEvent',
            allowedRoles: [ROLES.ONSITE_STAFF, ROLES.ADMIN, ROLES.SUPER_ADMIN]
        },
        {
            id: 8,
            icon: 'qrcode',
            title: 'QR Scan - (Exhibitor)',
            description: 'Scan QR Codes of Tickets to validate or view details.',
            routeName: 'QrExhibitor',
            allowedRoles: [ROLES.EXHIBITOR, ROLES.SUPER_ADMIN]
        },
    ];

    // filter user roles 
    const getAccessibleMenuItems = () => {
        if (!user || !user.roles) return [];

        return menuItems.filter((item) => {
            return item.allowedRoles.some(role => user.roles.includes(role));
        });
    };

    const accessibleMenuItems = getAccessibleMenuItems();


    return (

        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20, marginBottom: 70 }]}>

                {/* Modified Header Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingHorizontal: 10,
                    marginBottom: 10
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{ paddingRight: 8 }}
                    >
                        <IonIcon name="arrow-back" color={theme.txt} size={28} />
                    </TouchableOpacity>
                    <Text style={[style.apptitle, {
                        color: theme.txt,
                        marginLeft: 4
                    }]}>Menu</Text>
                </View>

                <ScrollView>
                    {accessibleMenuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 20,
                                paddingHorizontal: 12,
                                backgroundColor: Colors.secondary,
                                borderRadius: 10,
                                marginBottom: 12,
                                shadowColor: '#000',
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                shadowOffset: { width: 0, height: 2 },
                            }}
                            onPress={() => navigation.navigate(item.routeName)}
                        >
                            <View
                                style={{
                                    backgroundColor: Colors.default,
                                    borderRadius: 100,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 8,
                                    width: 40,
                                    height: 40
                                }}
                            >
                                <Icon name={item.icon} size={20} color="#fff" />
                                {/* <Text>+</Text> */}
                            </View>
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b16, { color: '#333' }]}>{item.title}</Text>
                                <Text style={[style.r14, { fontSize: 14, color: '#666', marginTop: 4 }]}>{item.description}</Text>
                            </View>
                            <AntIcon name="arrowright" size={20} color={Colors.active} />
                        </TouchableOpacity>
                    ))}

                    {/* KYC UI Section */}
                    <View style={{
                        backgroundColor: Colors.secondary,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 12,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        shadowOffset: { width: 0, height: 2 },
                    }}>
                        <Text style={[style.b16, { color: '#333' }]}>Verify KYC</Text>
                        <Text style={[style.r14, { fontSize: 14, color: '#666', marginTop: 4 }]}>KYC is mandatory for tax statement</Text>

                        <Image
                            source={require('../../assets/image/kycc.png')}
                            style={{ width: 80, height: 80, resizeMode: 'contain' }}
                        />

                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.default,
                                paddingVertical: 10,
                                paddingHorizontal: 16,
                                borderRadius: 5,
                                alignSelf: 'flex-end',
                            }}
                            onPress={() => navigation.navigate('KYCVerification')}
                        >
                            <Text style={[style.btntxt, { color: Colors.secondary, fontSize: 14 }]}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView >


    )
}

