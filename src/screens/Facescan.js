import { View, Text, SafeAreaView, ImageBackground, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, Modal } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-elements/dist/helpers';
import { BallIndicator, } from 'react-native-indicators'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Facescan() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <ImageBackground source={require('../../assets/image/facescan.png')}
                style={{ flex: 1 }}>

                <View style={[style.main, { marginTop: 20 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Facereco')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={Colors.secondary} size={30}
                            />
                        </TouchableOpacity>
                        } />

                    <Text style={[style.apptitle, { color: Colors.secondary, textAlign: 'center', marginTop: 20 }]}>Face Recognition</Text>

                    <Text style={[style.r18, { color: Colors.secondary, textAlign: 'center', marginTop: 20 }]}>Add a face recognition to make your account more secure.</Text>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={[style.title, { color: Colors.secondary, textAlign: 'center', marginTop: 20 }]}>100%</Text>
                        <Text style={[style.r18, { color: Colors.secondary, textAlign: 'center', marginTop: 15 }]}>Verifying your face </Text>

                        <View style={{ flexDirection: 'row', marginVertical: 20, marginTop: 40 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}
                                style={[style.btn, { flex: 1, backgroundColor: theme.btn }]}>
                                <Text style={[style.btntxt, { color: theme.btntxt }]}>Skip</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 5 }}></View>
                            <TouchableOpacity onPress={() => { setVisible(true) }}
                                style={[style.btn, { flex: 1 }]}>
                                <Text style={style.btntxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
            </ImageBackground>
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
                            <Image source={require('../../assets/image/congrats.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, alignSelf: 'center', marginTop: 10 }} />
                            <Text style={[style.apptitle, { color: Colors.default, textAlign: 'center', marginTop: 20 }]}>Congratulations</Text>
                            <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                            <BallIndicator size={30} color={Colors.default} style={{ marginTop: 40 }} />
                            <TouchableOpacity 
                            onPress={() => { setVisible(false),navigation.navigate('BottomNavigator') }}
                                style={[style.btn, { marginTop:40}]}>
                                <Text style={style.btntxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}