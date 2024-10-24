import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Letsin() {
 
    const theme = useContext(themeContext);
    const navigation=useNavigation();
   
    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
            <AppBar 
            color={theme.bg}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Introduction')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

          <ScrollView showsVerticalScrollIndicator={false}>

          <Image source={require('../../assets/image/let.png')}
               resizeMode='stretch'
               style={{height:height/4.5,width:width/1.7,alignSelf:'center'}}></Image>

            <View style={{marginBottom:20,marginTop:30}}>
                <Text style={[style.title,{color:theme.txt,textAlign:'center'}]}>Let’s you in</Text>
            </View>

            <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.border,borderWidth:1,backgroundColor:theme.borderbg}]}>
               <Image source={require('../../assets/image/Fb.png')}
               resizeMode='stretch'
               style={{height:height/25,width:width/11}}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Facebook</Text>
            </TouchableOpacity>
           </View>
            <View style={{paddingTop:15,}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.border,borderWidth:1,backgroundColor:theme.borderbg}]}>
               <Image source={require('../../assets/image/Google.png')}
               resizeMode='stretch'
               style={{height:height/25,width:width/11}}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop:15}}>
            <TouchableOpacity style={[style.btn1,{borderColor:theme.border,borderWidth:1,backgroundColor:theme.borderbg}]}>
               <Image source={theme.apple}
               resizeMode='stretch'
               style={{height:height/25,width:width/11}}></Image>
               <Text style={[style.btntxt1,{color:theme.txt}]}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:30,marginVertical:50}}>
              <View style={[style.divider,{flex:1,backgroundColor:theme.border}]}></View>
              <Text style={[style.b18,{color:theme.disable2,marginHorizontal:10}]}>Or</Text>
              <View style={[style.divider,{flex:1,backgroundColor:theme.border}]}></View>
          </View>

          <View style={{}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
            style={style.btn}>
               <Text style={style.btntxt}>Sign in with password</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'center',paddingTop:30,marginBottom:10}}>
            <Text style={[style.r14,{color:theme.inputtxt}]}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={[style.b14,{color:Colors.primary,}]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}