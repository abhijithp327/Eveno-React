import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,KeyboardAvoidingView} from 'react-native'
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

export default function Profilefill() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [isFocused, setIsFocused] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex:1}}>

        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
            <AppBar 
            color={theme.bg}
            title='Fill Your Profile'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

            <View>
                <Avatar image={require('../../assets/image/user.png')}
                size={100} style={{alignSelf:'center',marginTop:20}}></Avatar>
                <Image source={require('../../assets/image/Exclude.png')}
               resizeMode='stretch'
               style={{height:height/32,width:width/15,position:'absolute',bottom:0,right:125}}></Image>
            </View>

            <View style={[style.txtinput,{borderColor: isFocused === 'Full Name' ? Colors.default  : theme.input,backgroundColor: isFocused==='Full Name' ?'#584CF410': theme.input,marginTop:20}]}>
            <TextInput placeholder='Full Name'
                    selectionColor={Colors.primary}
                    onFocus={() => setIsFocused('Full Name')}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Urbanist-Regular',flex:1}]}
            />
            </View>

            <View style={[style.txtinput,{borderColor: isFocused === 'Nickname' ? Colors.default : theme.input,backgroundColor: isFocused==='Nickname' ?'#584CF410': theme.input,marginTop:20}]}>
            <TextInput placeholder='Nickname'
                    selectionColor={Colors.primary}
                    onFocus={() => setIsFocused('Nickname')}
                    onBlur={() => setIsFocused(false)}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Urbanist-Regular',flex:1}]}
            />
            </View>

            <View style={[style.inputContainer,{borderColor: isFocused==='Date of Birth' ? Colors.default : theme.input,borderWidth:1,backgroundColor: isFocused==='Date of Birth' ?'#584CF410': theme.input,marginTop:20}]}>
                <TextInput placeholder='Date of Birth'
                onFocus={() => setIsFocused('Date of Birth')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Urbanist-Regular',flex:1}]}
                />
                <TouchableOpacity>
                    <Icon name='calendar-outline' color={isFocused==='Date of Birth' ? Colors.default: Colors.disable} size={20} />
                </TouchableOpacity>
            </View>

            <View style={[style.inputContainer,{borderColor: isFocused==='Email' ? Colors.default  : theme.input,borderWidth:1,backgroundColor: isFocused==='Email' ?'#584CF410': theme.input,marginTop:20}]}>
                <TextInput placeholder='Email'
                onFocus={() => setIsFocused('Email')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Urbanist-Regular',flex:1}]}
                />
                <TouchableOpacity>
                    <Icon name='mail-outline' color={isFocused==='Email' ? Colors.default : Colors.disable} size={20} />
                </TouchableOpacity>
            </View>

            <View style={[style.inputContainer,{borderColor: isFocused==='Gender' ? Colors.default  : theme.input,borderWidth:1,backgroundColor: isFocused==='Gender' ?'#584CF410': theme.input,marginTop:20}]}>
                <TextInput placeholder='Gender'
                onFocus={() => setIsFocused('Gender')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Urbanist-Regular',flex:1}]}
                />
                <TouchableOpacity>
                    <Icon name='caret-down' color={isFocused==='Gender' ? Colors.default : Colors.disable} size={20} />
                </TouchableOpacity>
            </View>

            <View style={{marginTop:40,marginBottom:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Location')} 
            style={style.btn}>
               <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}