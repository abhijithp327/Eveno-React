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

export default function Notification() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [ison, setIsOn] = useState(true);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(false);
    const toggle1 = () => setIsOn1(previousState => !previousState);

    const [ison2, setIsOn2] = useState(true);
    const toggle2 = () => setIsOn2(previousState => !previousState);

    const [ison3, setIsOn3] = useState(false);
    const toggle3 = () => setIsOn3(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isoff, setIsOff] = useState(true);
    const tog = () => setIsOff(previousState => !previousState);

    const [isoff1, setIsOff1] = useState(true);
    const tog1 = () => setIsOff1(previousState => !previousState);

    const [isoff2, setIsOff2] = useState(true);
    const tog2 = () => setIsOff2(previousState => !previousState);

    const [isoff3, setIsOff3] = useState(false);
    const tog3 = () => setIsOff3(previousState => !previousState);

    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
    
        <AppBar 
            color={theme.bg}
            title='Notification'
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
                <Text style={[style.b18,{color:theme.txt,}]}>Enable Sound & Vibrate</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Purchased Tickets</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Liked Events</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Followed Organizer</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison2 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle2}
                  value={ison2}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Special Offers</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison3 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle3}
                  value={ison3}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt}]}>Payments</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Reminders</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog}
                  value={isoff}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>Recommendations</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog1}
                  value={isoff1}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>App Updates</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff2 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog2}
                  value={isoff2}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt,}]}>New Service Available</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff3 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog3}
                  value={isoff3}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:25,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.b18,{color:theme.txt}]}>New Tips Available</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled2 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
            </View>

        </ScrollView>
    </View>
    </SafeAreaView>
  )
}