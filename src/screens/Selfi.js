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

export default function Selfi() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar 
            color={theme.bg}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('PhotoId')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <Text style={[style.apptitle,{color:theme.txt,alignSelf:'center'}]}>Selfie with ID Card</Text>
        <Text style={[style.r16,{color:theme.txt,alignSelf:'center',marginTop:10}]}>Please look at the camera and hold still</Text>
        
        <View style={{flex:1,marginTop:10}}>
        <Image source={require('../../assets/image/selfi.png')}
            resizeMode='stretch'
            style={{flex:1,width:width-40,alignSelf:'center'}}>
        </Image>
        </View>

        <View style={{flexDirection:'row',marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PhotoId')} 
            style={[style.btn,{flex:1,backgroundColor:theme.btn}]}>
            <Text style={[style.btntxt,{color:theme.btntxt}]}>Retacke</Text>
        </TouchableOpacity>
        <View style={{margin:5}}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('Otp')} 
            style={[style.btn,{flex:1}]}>
            <Text style={style.btntxt}>Continue</Text>
        </TouchableOpacity>
        </View>
    
    </View>
    </SafeAreaView>
  )
}