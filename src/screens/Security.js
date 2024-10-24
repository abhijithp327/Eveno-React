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

export default function Security() {
    
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
            title='Security'
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

        <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between',}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Remember me</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Face ID</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Biometric ID</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Google Authenticator</Text>
                 <Icon name='chevron-forward' size={25} color={theme.txt}></Icon>
            </View>

            <View style={{marginTop:40,marginBottom:15}}>
                <TouchableOpacity  
                style={[style.btn,{backgroundColor:theme.btn}]}>
                    <Text style={[style.btntxt,{color:theme.btntxt}]}>Change PIN</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginBottom:20}}>
                <TouchableOpacity  
                style={[style.btn,{backgroundColor:theme.btn}]}>
                    <Text style={[style.btntxt,{color:theme.btntxt}]}>Change Password</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
    </SafeAreaView>
  )
}