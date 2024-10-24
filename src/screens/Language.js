import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Language() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [checked, setChecked] = useState(false);
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
    
        <AppBar 
            color={theme.bg}
            title='Language'
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

            <Text style={[style.subtitle,{color:theme.txt,marginTop:20}]}>Suggested</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>English (US)</Text>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>English (UK)</Text>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>

            <View style={[style.divider1,{backgroundColor:theme.border}]}></View>

            <Text style={[style.subtitle,{color:theme.txt}]}>Language</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Mandarin</Text>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Hindi</Text>
                <RadioButton
                  value="four"
                  status={checked === 'four' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('four')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Spanish</Text>
                <RadioButton
                  value="five"
                  status={checked === 'five' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('five')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>French</Text>
                <RadioButton
                  value="six"
                  status={checked === 'six' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('six')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Arabic</Text>
                <RadioButton
                  value="seven"
                  status={checked === 'seven' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('seven')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Bengali</Text>
                <RadioButton
                  value="eight"
                  status={checked === 'eight' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('eight')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Russian</Text>
                <RadioButton
                  value="nine"
                  status={checked === 'nine' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('nine')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                <Text style={[style.b18,{color:theme.txt}]}>Indonesia</Text>
                <RadioButton
                  value="ten"
                  status={checked === 'ten' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('ten')}
                  color={Colors.primary}
                  uncheckedColor={Colors.primary}
                />
            </View>

        </ScrollView>  
    </View>
    </SafeAreaView>
  )
}