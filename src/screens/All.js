import { View, Text ,SafeAreaView, ImageBackground,TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import { color } from 'react-native-elements/dist/helpers';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function All() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}} contentContainerStyle={{height:height*1.4}}>

      <View style={{flexDirection:'row'}}>
        <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p1.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Art Workshops</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Fri, Dec 20 • 13.00 - 15.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>New Avenue, Wa...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p2.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Music Concert</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Tue, Dec 19 • 19.00 - 22.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>Central Park, Ne...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>                
                </View>
            </View>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>
        <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p3.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Tech Seminar</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Sat, Dec 22 • 10.00 - 12.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>Auditorium Build...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p4.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Mural Painting</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Sun, Dec 16 • 11.00 - 13.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>City Space, New...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>                
                </View>
            </View>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>
        <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p5.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Fitness & Gym...</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Thu, Dec 21 • 09.00 - 12.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>Health Center, W...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p6.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>DJ Music & Co...</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Mon, Dec 16 • 18.00 - 22.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>Grand Building, ...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>                
                </View>
            </View>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>
        <View style={[{padding:5,flex:1}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p7.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Jazz Festival</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Sun, Dec 24 • 19.00 - 23.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>Central Park, N...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={[{padding:5,flex:1,paddingBottom:10}]}>
            <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15}]}>
                <ImageBackground source={require('../../assets/image/p8.png')}
                resizeMode='stretch'
                style={{height:height/6}}></ImageBackground>
                <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>Music Concert</Text>
                <Text style={[style.r12,{color:Colors.default,marginVertical:5}]}>Sat, Dec 22 • 18.00 - 22.00...</Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='location' size={20} color={Colors.default}></Icon>
                    <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>New Avenue, W...</Text>
                    <TouchableOpacity>
                    <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                    </TouchableOpacity>                
                </View>
            </View>
            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}