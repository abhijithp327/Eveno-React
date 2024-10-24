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
import IonIcon from 'react-native-vector-icons/Ionicons';

const ManageEvent = () => {

  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (

    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20, marginBottom: 100 }]}>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <AppBar
            color={theme.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                <IonIcon name="arrow-back" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          />
          <Text style={[style.apptitle, { color: theme.txt, flex: 1, marginLeft: 8 }]}>Manage My Event</Text>
        </View>

        {/* Search Bar */}
        <View style={{
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 40,
          paddingHorizontal: 10,
          height: 50,
          borderColor: Colors.secondary2,
          padding: 10
        }}>
          <Icon name="search" size={16} color={Colors.disable} style={{ paddingHorizontal: 8, }} />
          <TextInput
            style={{
              flex: 1,
              color: Colors.active,
              fontSize: 16,
              paddingVertical: 0,
              height: '100%',
              textAlignVertical: 'center',
            }}
            placeholder="Search"
            placeholderTextColor={Colors.disable}
          />
        </View>

        {/* Create New Event Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateEvent')}
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.default,
            borderWidth: 2,
            borderRadius: 16,
            padding: 10
          }}
        >
          <Icon name="plus" size={14} color={Colors.default} />
          <Text style={[style.b16, { color: theme.txt, marginLeft: 8 }]}>Create a New Event</Text>
        </TouchableOpacity>

        {/* Event List */}
        <ScrollView style={{ marginTop: 20 }}>
          {/* Sample Event 1 */}
          <TouchableOpacity style={{ flexDirection: 'row', padding: 15, borderRadius: 10, borderColor: Colors.secondary1, borderWidth: 1, marginBottom: 15 }}>
            <Image source={require('../../assets/image/m17.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={[style.b16, { color: theme.txt }]}>Live Music By Melrick @ Stone Street</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Sun, July 2, 9:00 PM</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Stage Name, Bengaluru, KA</Text>
            </View>
          </TouchableOpacity>

          {/* Sample Event 2 */}
          <TouchableOpacity style={{ flexDirection: 'row', padding: 15, borderRadius: 10, borderColor: Colors.secondary1, borderWidth: 1, marginBottom: 15 }}>
            <Image source={require('../../assets/image/m18.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={[style.b16, { color: theme.txt }]}>Live Music By Melrick @ Stone Street</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Sun, July 2, 9:00 PM</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Stage Name, Bengaluru, KA</Text>
            </View>
          </TouchableOpacity>

          {/* Sample Event 3 */}
          <TouchableOpacity style={{ flexDirection: 'row', padding: 15, borderRadius: 10, borderColor: Colors.secondary1, borderWidth: 1, marginBottom: 15 }}>
            <Image source={require('../../assets/image/m19.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={[style.b16, { color: theme.txt }]}>Live Music By Melrick @ Stone Street</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Sun, July 2, 9:00 PM</Text>
              <Text style={[style.r14, { color: theme.txt }]}>Stage Name, Bengaluru, KA</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>


      </View>
    </SafeAreaView >

  )
}

export default ManageEvent;