import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../screens/Home';
import TicketTab from '../screens/TicketTab';
import Explore1 from '../screens/Explore1';
import FCards from '../screens/FCards';
import Profile from '../screens/Profile';
import SocialHome from '../screens/SocialHome';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState('false')

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: 'absolute', height: 70, paddingBottom: 5 },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular' }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="home-outline" size={30}
              color={focused ? Colors.default : Colors.disable} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="SocialHome" component={SocialHome}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular' }}>Social</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Icons name="account-group-outline" size={30}
              color={focused ? Colors.default : Colors.disable} />
          },
          headerShown: false,
        }} />


      <Tab.Screen name="TicketTab" component={TicketTab}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular' }}>Tickets</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Icons name="ticket-confirmation-outline" size={30}
              color={focused ? Colors.default : Colors.disable} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular' }}>Profile</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Icons name="account-outline" size={30}
              color={focused ? Colors.default : Colors.disable} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="FCard" component={Menu}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular' }}>Menu</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="menu" size={30}
              color={focused ? Colors.default : Colors.disable} />
          },
          headerShown: false,
        }} />

    </Tab.Navigator>
  );
}

