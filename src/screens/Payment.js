import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,} from 'react-native'
import React,{useState,useContext} from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Payment() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
    
        <AppBar 
            color={theme.bg}
            title='Payments'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>}
            trailing={ <TouchableOpacity >
            <Icons name="line-scan"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }
        />

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{padding:5,marginTop:20}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={require('../../assets/image/paypal.png')}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/13.5}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>PayPal</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={require('../../assets/image/Google.png')}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/13.5}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>Google Pay</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={theme.apple}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/13.5}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>Apple Pay</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={theme.mastercard}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/11}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>•••• •••• •••• •••• 4679</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={theme.mastercard}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/11}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>•••• •••• •••• •••• 2766</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{flexDirection:'row',alignItems:'center',backgroundColor:theme.bg,padding:15,borderRadius:10}]}>
                    <Image source={theme.mastercard}
                        resizeMode='stretch'
                        style={{height:height/30,width:width/11}}></Image>
                    <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>•••• •••• •••• •••• 3892</Text>
                    <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
                </View>
            </View>

            <View style={{marginTop:50,marginBottom:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Linkaccount')} 
                style={style.btn}>
                    <Text style={style.btntxt}>Add New Account</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>    
    </View>
    </SafeAreaView>
  )
}