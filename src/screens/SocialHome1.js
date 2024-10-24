import { View, Text, SafeAreaView, Dimensions, ImageBackground, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppBar, HStack } from '@react-native-material/core';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home1() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: '#fff' }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height*1.05 : height/1.05}}>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={[style.title, { color: Colors.secondary, }]}>Discover</Text>
          <Text style={[style.r14, { color: Colors.btntxt, }]}>View all</Text>
        </View> */}
        <View style={{ marginVertical: 15,marginTop:20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

            <View>
              <ImageBackground source={require('../../assets/image/s45.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 2.5, }} >
                <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 10 }}>
                  <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F78361', '#F54B64',]}
                    style={{ flexDirection: 'row', alignItems: 'center', height: height / 42, width: width / 5.8, borderRadius: 15, justifyContent: 'center', }} >
                    <Icons name="video" color={Colors.secondary} size={16} />
                    <Text style={[style.r12, { marginLeft: 3 }]}>LIVE</Text>
                  </LinearGradient>
                </View>
                <View style={{ justifyContent: 'flex-end', margin: 10, flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                      <Avatar.Image source={require('../../assets/image/s34.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                    </View>
                    <Text style={[style.r12, { color: Colors.secondary, marginLeft: 5 }]}>Thomas Curtis</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View style={{ marginHorizontal: 12 }}>
              <ImageBackground source={require('../../assets/image/s46.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 2.5, }} >
                <View style={{ justifyContent: 'flex-end', margin: 10, flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                      <Avatar.Image source={require('../../assets/image/s36.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                    </View>
                    <Text style={[style.r12, { color: Colors.secondary, marginLeft: 5 }]}>Christine Barton</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View >
              <ImageBackground source={require('../../assets/image/s47.png')} resizeMode='stretch' style={{ height: height / 4, width: width / 2.5, }} >
                <View style={{ justifyContent: 'flex-end', margin: 10, flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                      <Avatar.Image source={require('../../assets/image/s38.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                    </View>
                    <Text style={[style.r12, { color: Colors.secondary, marginLeft: 5 }]}>Nathan McKinney</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

          </ScrollView>
        </View>
        <View style={{padding:5}}>
        <View style={[style.shadow, { padding: 12, marginVertical: 15, backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={require('../../assets/image/s48.png')} size={50} style={{ backgroundColor: Colors.bg }} />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[style.b16, { color: Colors.bg, }]}>Marcus Norris</Text>
              <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>2 hours ago</Text>
            </View>
            <Icon name="ellipsis-horizontal" color={Colors.disable} size={24} />
          </View>
          <Text style={[style.m14, { color: Colors.btntxt, marginTop: 10 }]}>#relax, #travel</Text>
          <Text style={[style.r14, { color: Colors.disable, marginTop: 3 }]}>Airport Hotels The Right Way To Start A Short Break Holiday</Text>
          <ImageBackground source={require('../../assets/image/s49.png')} resizeMode='stretch' style={{ height: height / 3, marginTop: 15 }} >
            <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 10 }}>
              <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F78361', '#F54B64',]}
                style={{ flexDirection: 'row', alignItems: 'center', height: height / 42, width: width / 5.8, borderRadius: 15, justifyContent: 'center', }} >
                <Icons name="video" color={Colors.secondary} size={16} />
                <Text style={[style.r12, { marginLeft: 3 }]}>LIVE</Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
        </View>


        

      </ScrollView >
    </SafeAreaView >
  )
}