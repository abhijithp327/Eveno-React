import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { BallIndicator, } from 'react-native-indicators'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewPass() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isSelected, setIsSelected] = useState(false)
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}>

                <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                    <AppBar
                        color={theme.bg}
                        title='Create New Password'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('OtpVerification')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image source={require('../../assets/image/pass.png')}
                            resizeMode='stretch'
                            style={{ height: height / 3.7, width: width / 1.3, alignSelf: 'center', marginTop: 30 }}>
                        </Image>

                        <Text style={[style.r18, { color: theme.txt, marginTop: 40 }]}>Create Your New Password</Text>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'New Password' ? Colors.primary : theme.input, borderWidth: 1, backgroundColor: isFocused === 'New Password' ? '#584CF410' : theme.input, marginTop: 30 }]}>
                            <Icon name='lock-closed' size={25} color={isFocused === 'New Password' ? '#584CF4' : Colors.disable}></Icon>
                            <TextInput placeholder='New Password'
                                secureTextEntry={!isPasswordVisible}
                                onFocus={() => setIsFocused('New Password')}
                                onBlur={() => setIsFocused(false)}
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[{ paddingHorizontal: 10, color: theme.txt, fontFamily: 'Urbanist-Regular', flex: 1 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={isFocused === 'New Password' ? '#584CF4' : Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'Confirm Password' ? Colors.primary : theme.input, borderWidth: 1, backgroundColor: isFocused === 'Confirm Password' ? '#584CF410' : theme.input, marginTop: 20 }]}>
                            <Icon name='lock-closed' size={25} color={isFocused === 'Confirm Password' ? '#584CF4' : Colors.disable}></Icon>
                            <TextInput placeholder='Confirm Password'
                                secureTextEntry={!isPasswordVisible1}
                                onFocus={() => setIsFocused('Confirm Password')}
                                onBlur={() => setIsFocused(false)}
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[{ paddingHorizontal: 10, color: theme.txt, fontFamily: 'Urbanist-Regular', flex: 1 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)} >
                                <Icon name={isPasswordVisible1 ? 'eye-off' : 'eye'} color={isFocused === 'Confirm Password' ? '#584CF4' : Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 20, paddingLeft: 10, alignItems: 'center', justifyContent: 'center' }}>

                            <CheckBox
                                value={isSelected}
                                onValueChange={() => setIsSelected(!isSelected)}
                                tintColors={{ true: Colors.primary, false: Colors.primary }} />
                            <View>
                                <Text style={[style.b18, { color: theme.txt ,marginLeft:5}]}>Remember me</Text>
                            </View>

                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <TouchableOpacity onPress={() => setVisible(true)}
                                style={style.btn}>
                                <Text style={style.btntxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true} visible={visible}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 40, borderRadius: 30,marginVertical:120 }]}>
                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity onPress={() => { setVisible(false)}}>
                                <Icon name='close' size={20} color={theme.txt}/>
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../assets/image/congrats.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, alignSelf: 'center',marginTop:10 }} />
                            <Text style={[style.apptitle, { color: Colors.primary, textAlign: 'center', marginTop: 20 }]}>Congratulations</Text>
                            <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                            <BallIndicator size={30} color={Colors.primary} style={{ marginTop: 40 }} />
                            <TouchableOpacity onPress={() => {setVisible(false),navigation.navigate('BottomNavigator')}}
                                style={[style.btn,{marginTop:40}]}>
                                <Text style={style.btntxt}>Continue</Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}