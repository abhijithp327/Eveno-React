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
import { AppBar } from '@react-native-material/core';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Live() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <ImageBackground source={require('../../assets/image/s30.png')}  style={{ flex:1 }} >
                <View style={{ flex: 1 }}>
                    <AppBar
                        elevation={0}
                        style={{ backgroundColor: 'transparent', paddingHorizontal: 20 ,marginTop:20}}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="close" color={Colors.secondary} size={28} />
                        </TouchableOpacity>}
                        trailing={<Icon name="settings-outline" color={Colors.secondary} size={24} />}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 20,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,marginBottom:15}}>
                        <Image source={require('../../assets/image/s31.png')} style={{ height: height/26, width: width/12,resizeMode:'stretch' }} />
                        <Icon name="flash" color='#1D1D26' size={26} />
                        <View style={{height:90,width:90,borderRadius:45,backgroundColor:'#FFFFFF30',justifyContent:'center',alignItems:'center'}}>
                            <View style={{height:60,width:60,borderRadius:30,backgroundColor:'#FFFFFF'}}></View>
                        </View>
                        <Icons name="set-left" color='#1D1D26' size={26} />
                        <Icon name="sunny" color='#1D1D26' size={26} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,marginBottom:40}}>
                        <Text style={[style.r16, { color: '#FFFFFF50' }]}>TYPE</Text>
                        <Text style={[style.r16, { color: '#FFFFFF50' }]}>LIVE</Text>
                        <Text style={[style.r16, { color: Colors.secondary }]}>NORMAL</Text>
                        <Text style={[style.r16, { color: '#FFFFFF50' }]}>ZOOM</Text>
                        <Text style={[style.r16, { color: '#FFFFFF50' }]}>FOCUS</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}