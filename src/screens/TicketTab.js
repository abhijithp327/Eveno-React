import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTickets } from '../redux/features/eventSlice';
import appConfig from '../config/appConfig';
import Upcoming from '../tabs/tickets/Upcoming';
import Completed from '../tabs/tickets/Completed';
import Cancelled from '../tabs/tickets/Cancelled';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarStyle: { height:50,marginVertical:30,marginHorizontal:2},
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarShowLabel: true,
                tabBarItemStyle: { marginHorizontal: -10 },
                tabBarIndicatorStyle: { backgroundColor: Colors.default },
                swipeEnabled: false,

            }}>
            <Tab.Screen name="Upcoming" component={Upcoming}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Upcoming</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Completed" component={Completed}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Completed</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Cancelled" component={Cancelled}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Cancelled</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}


export default function TicketTab() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>

                    <View >
                        <Avatar source={require('../../assets/image/Logo2.png')}
                            size={40}></Avatar>
                    </View>

                    <Text style={[style.apptitle, { color: theme.txt, flex: 1, marginLeft: 2 }]}>Tickets</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Messagedelete')}>
                            <Icon name='search' size={30} color={theme.txt}></Icon>
                        </TouchableOpacity>

                        <View style={{ margin: 10 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('MessageN')}>
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={30} />
                        </TouchableOpacity>

                    </View>

                </View>

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}