import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useContext,} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, RadioButton } from 'react-native-paper';
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function UProfile1() {

    const navigation = useNavigation();

  return (
   <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
    

    <ImageBackground source={require('../../assets/image/a1.png')} style={{height:height/3.3}}>

    <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
        
        <AppBar
            color={Colors.secondary}
            elevation={0}
            style={{backgroundColor:'transparent',marginTop:25,marginLeft:20}}
            leading={<TouchableOpacity
                onPress={() => navigation.navigate('MyTabs')}
            >
                <Icon name="arrow-back" color={Colors.secondary} size={25} />
            </TouchableOpacity>
            }
        />

        <View style={{flex:1,justifyContent:'flex-end',marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('UProfile2')} style={{flexDirection:'row',alignItems:'center',marginHorizontal:20}}>
                <Avatar.Image source={require('../../assets/image/d4.png')} size={55} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                <View style={{flex:1,marginLeft:10}}>
                    <Text style={[style.m16, { color: Colors.secondary }]}>Jorge Curtis</Text>
                    <Text style={[style.r12,{color:Colors.secondary,marginTop:2}]}>@jorgecutis</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    </ImageBackground>


    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:20,marginTop:15}}>
            <View >
                <Text style={[style.r16,{textAlign:'center', color: Colors.bg1}]}>128</Text>
                <Text style={[style.r12,{color:Colors.lable,marginTop:3,textAlign:'center'}]}>Posts</Text>
            </View>
            <View style={{}}>
                <Text style={[style.r16,{textAlign:'center',color:Colors.bg1}]}>3120</Text>
                <Text style={[style.r12,{color:Colors.lable,marginTop:3,textAlign:'center'}]}>Following</Text>
            </View>
            <View style={{}}>
                <Text style={[style.r16,{textAlign:'center',color:Colors.bg1}]}>5024</Text>
                <Text style={[style.r12,{color:Colors.lable,marginTop:3,textAlign:'center'}]}>Follower</Text>
            </View>
            <Avatar.Image source={require('../../assets/image/a2.png')} size={35} style={{backgroundColor:Colors.bg,marginLeft:30}}></Avatar.Image>
            <TouchableOpacity onPress={() => navigation.navigate('AddBank2')}>
                <LinearGradient 
                    colors={[Colors.primary,Colors.primary1]} style={[style.btn, {width:width/4.5,height:36}]}>
                    <Text style={[style.r12,{color:Colors.secondary}]}>FOLLOW</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:Colors.border,paddingVertical:10,marginTop:15,paddingHorizontal:40}}>
            <Icon name='grid' size={20} color={Colors.primary1}></Icon>
            <Icon name='image-sharp' size={22} color={Colors.disable}></Icon>
            <Icon name='caret-forward-circle' size={25} color={Colors.disable}></Icon>
            <Icon name='md-musical-note' size={22} color={Colors.disable}></Icon>
        </View>

        <View style={{padding:5,marginHorizontal:10,marginTop:10}}>
            <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:Colors.secondary,padding:15}]}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Avatar.Image source={require('../../assets/image/d5.png')} size={45} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={[style.m16]}>Edward Kelly</Text>
                        <Text style={[style.r12,{color:Colors.disable,marginTop:2}]}>2 hours ago</Text>
                    </View>
                    <Icon name='ellipsis-horizontal' size={20} color={Colors.disable}></Icon>
                </View>
                <Text style={[style.r12,{color:Colors.primary1,marginTop:10}]}>#relax, #travel</Text>
                <Text style={[style.r14,{color:Colors.disable1,lineHeight:20,marginTop:5}]}>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale... Read more</Text>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                    <View style={{flexDirection:'row',flex:0.4}}>
                        <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                        <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                    </View>
                    <View style={{flexDirection:'row',flex:1}}>
                        <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                        <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                    </View>
                    <Image source={require('../../assets/image/d6.png')} resizeMode='stretch' style={{height:height/25,width:width/5}}></Image>
                </View>
            </View>
        </View>

        <View style={{padding:5,marginHorizontal:10,marginVertical:10}}>
            <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:Colors.secondary,padding:15}]}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Avatar.Image source={require('../../assets/image/d7.png')} size={45} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={[style.m16]}>Howard Barton</Text>
                        <Text style={[style.r12,{color:Colors.disable,marginTop:2}]}>2 hours ago</Text>
                    </View>
                    <Icon name='ellipsis-horizontal' size={20} color={Colors.disable}></Icon>
                </View>
                <Text style={[style.r12,{color:Colors.primary1,marginTop:10}]}>#relax, #travel</Text>
                <Text style={[style.r14,{color:Colors.secondary,lineHeight:20,marginTop:5}]}>The Luxury Of Traveling With Yacht Charter Companies</Text>

                <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{height:height/3,width:width-60,marginTop:10}}></Image>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                    <View style={{flexDirection:'row',flex:0.4}}>
                        <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                        <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                    </View>
                    <View style={{flexDirection:'row',flex:1}}>
                        <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                        <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                    </View>
                    <Image source={require('../../assets/image/d8.png')} resizeMode='stretch' style={{height:height/25,width:width/5}}></Image>
                </View>
            </View>
        </View>

    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}