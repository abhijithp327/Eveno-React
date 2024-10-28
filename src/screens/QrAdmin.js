import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
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
import StatusBadge from '../components/StatusBadge';
import IonIcon from 'react-native-vector-icons/Ionicons';

const QrAdmin = () => {

    const menuItems = [
        {
            id: 1,
            icon: 'qrcode',
            title: 'Ticket Details',
            description: 'Scan a ticket to check details',
            routeName: 'ScanTicketDetail'
        },
        {
            id: 2,
            icon: 'building',
            title: 'Validate Ticket',
            description: 'Validate the ticket on site',
            routeName: 'ScanEvent'
        },

    ];


    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20, marginBottom: 100 }]}>

                {/* Modified Header Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingHorizontal: 10,
                    marginBottom: 15
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
                    }]}>Scan</Text>
                </View>

                <ScrollView>
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 16,
                                paddingHorizontal: 12,
                                backgroundColor: Colors.secondary,
                                borderRadius: 10,
                                marginBottom: 15,
                                shadowColor: '#000',
                                borderColor: Colors.secondary,
                                borderWidth: 1,
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
                            </View>
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[{ fontSize: 16, color: '#333', fontFamily: 'Urbanist-SemiBold' }]}>{item.title}</Text>
                                <Text style={[style.r14, { fontSize: 14, fontFamily: 'Urbanist-SemiBold', color: '#666', marginTop: 4 }]}>{item.description}</Text>
                            </View>
                            <AntIcon name="arrowright" size={20} color={Colors.active} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </View>
        </SafeAreaView >
    )
}

export default QrAdmin