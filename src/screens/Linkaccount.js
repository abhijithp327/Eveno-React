import { View, Text ,SafeAreaView, TextInput, StatusBar,Switch,TouchableOpacity,Image,ScrollView,Dimensions,} from 'react-native'
import React,{useState,useContext} from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Linkaccount() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
    
        <AppBar 
            color={theme.bg}
            title='Linked Accounts'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flexDirection:'row',marginTop:25,alignItems:'center',marginRight:7}}>
            <Image source={require('../../assets/image/Google.png')}
               resizeMode='stretch'
               style={{height:height/30,width:width/13.5}}></Image>
            <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:20}]}>Google</Text>
            <Switch
                trackColor={{false: Colors.disable, true: Colors.primary}}
                thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggle}
                value={ison}
            />
        </View>

        <View style={{flexDirection:'row',marginTop:30,alignItems:'center',marginRight:7}}>
            <Image source={theme.apple}
               resizeMode='stretch'
               style={{height:height/30,width:width/13.5}}></Image>
            <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:20}]}>Apple</Text>
            <Switch
                trackColor={{false: Colors.disable, true: Colors.primary}}
                thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggle1}
                value={ison1}
            />
        </View>

        <View style={{flexDirection:'row',marginTop:30,alignItems:'center',marginRight:7}}>
            <Image source={require('../../assets/image/Fb.png')}
               resizeMode='stretch'
               style={{height:height/30,width:width/13.5}}></Image>
            <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:20}]}>Facebook</Text>
            <Switch
                trackColor={{false: Colors.disable, true: Colors.primary}}
                thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        </ScrollView>

    </View>
    </SafeAreaView>
  )
}