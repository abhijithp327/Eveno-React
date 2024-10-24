import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)
    const [isvisible, setisvisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Create New PIN'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Selfi')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 20 }]}>Add a PIN number to make your account more secure.</Text>
                <View style={{ paddingTop: 50 }}>
                    <OtpInputs
                        Clipboard={Clipboard}
                        numberOfInputs={4}
                        selectionColor={Colors.default}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                        inputStyles={{

                            borderColor: Colors.default,
                            backgroundColor: theme.input,
                            borderRadius: 10,
                            textAlign: 'center',
                            height: 45,
                            width: 55,
                            fontSize: 20,
                            borderWidth: 1,
                            color: theme.txt,
                            fontWeight: 'bold',

                        }}
                    />
                </View>
                <View style={{flex:1,justifyContent:'flex-end',marginBottom:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Fingerprint')}
                        style={style.btn}>
                        <Text style={style.btntxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}