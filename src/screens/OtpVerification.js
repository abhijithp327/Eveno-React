import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function OtpVerification() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='OTP Code Verification'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />

                    <Text style={[style.b18, { color: theme.txt, marginTop: 80, textAlign: 'center' }]}>Code has been send to +1 111 ******99</Text>
                    <View style={{ paddingTop: 50 }}>
                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={4}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                            inputStyles={{

                                borderColor: Colors.primary,
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
                    <Text style={[style.b18, { color: theme.txt, marginTop: 30, textAlign: 'center' }]}>Resend code in <Text style={{ color: Colors.primary }}>55</Text> s</Text>
                    <View style={{flex:1,justifyContent:'flex-end',marginBottom:20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('NewPass')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}