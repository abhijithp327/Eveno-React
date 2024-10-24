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

export default function Facereco() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar 
            color={theme.bg}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Fingerprint')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <Text style={[style.apptitle,{color:theme.txt,textAlign:'center',marginTop:20}]}>Face Recognition</Text>

        <Text style={[style.r18,{color:theme.txt,textAlign:'center',marginTop:20}]}>Add a face recognition to make your account more secure.</Text>

        <View style={{flex:1,marginTop:10,justifyContent:'center'}}>
        <Image source={theme.face}
            resizeMode='stretch'
            style={{height:height/3.3,width:width/1.5,alignSelf:'center'}}>
        </Image>
        </View>
        

        <View style={{flexDirection:'row',marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')} 
            style={[style.btn,{flex:1,backgroundColor:theme.btn}]}>
            <Text style={[style.btntxt,{color:theme.btntxt}]}>Skip</Text>
        </TouchableOpacity>
        <View style={{margin:5}}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('Facescan')} 
            style={[style.btn,{flex:1}]}>
            <Text style={style.btntxt}>Continue</Text>
        </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  )
}