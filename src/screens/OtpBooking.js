import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
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

export default function OtpBooking() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [isvisible, setIsVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Enter your PIN'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('ReviewSummary')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />

                    <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 80 }]}>Enter your PIN to confirm payment</Text>
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
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => setVisible(true)}
                            style={style.btn}>
                            <Text style={style.btntxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true} visible={visible}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 40, borderRadius: 30 ,marginVertical:110}]}>
                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => { setVisible(false) }}>
                                    <Icon name='close' size={20} color={theme.txt} />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../assets/image/failed.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, alignSelf: 'center', marginTop: 10 }} />
                            <Text style={[style.apptitle, { color: '#F75555', textAlign: 'center', marginTop: 20 }]}>Oops, Failed!</Text>
                            <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>Your payment failed. Please check your internet connection then try again.</Text>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity onPress={() => {setVisible(false),setIsVisible(true)}}
                                    style={style.btn}>
                                    <Text style={style.btntxt}>Try Again</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity onPress={() => setVisible(false)}
                                    style={[style.btn,{backgroundColor:theme.btn}]}>
                                    <Text style={[style.btntxt,{color:Colors.default}]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={isvisible}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 40, borderRadius: 30 ,marginVertical:110}]}>
                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => { setIsVisible(false),setVisible(false) }}>
                                    <Icon name='close' size={20} color={theme.txt} />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../assets/image/congrats1.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, alignSelf: 'center', marginTop: 10 }} />
                            <Text style={[style.apptitle, { color: Colors.default, textAlign: 'center', marginTop: 20 }]}>Congratulations!</Text>
                            <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>You have successfully placed an order for National Music Festival. Enjoy the event!</Text>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity onPress={() => {setIsVisible(false),navigation.navigate('ETicket')}}
                                    style={style.btn}>
                                    <Text style={style.btntxt}>View E-Ticket</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity onPress={() => {setIsVisible(false),setVisible(false)}}
                                    style={[style.btn,{backgroundColor:theme.btn}]}>
                                    <Text style={[style.btntxt,{color:Colors.default}]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            
        </SafeAreaView>
    )
}