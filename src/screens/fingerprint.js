import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Fingerprint() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar 
            color={theme.bg}
            title='Set Your Fingerprint'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Otp')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <Text style={[style.r18,{color:theme.txt,textAlign:'center',marginTop:30}]}>Add a fingerprint to make your account more secure.</Text>

        <View style={{flex:1,marginTop:10,justifyContent:'center'}}>
        <Image source={require('../../assets/image/fingerprint.png')}
            resizeMode='stretch'
            style={{height:height/3.5,width:width/1.7,alignSelf:'center'}}>
        </Image>
        </View>
        
        <Text style={[style.r18,{color:theme.txt,textAlign:'center',marginTop:30,marginBottom:40}]}>Please put your finger on the fingerprint scanner to get started.</Text>

        <View style={{flexDirection:'row',marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')} 
            style={[style.btn,{flex:1,backgroundColor:theme.btn}]}>
            <Text style={[style.btntxt,{color:theme.btntxt}]}>Skip</Text>
        </TouchableOpacity>
        <View style={{margin:5}}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('Facereco')} 
            style={[style.btn,{flex:1}]}>
            <Text style={style.btntxt}>Continue</Text>
        </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  )
}