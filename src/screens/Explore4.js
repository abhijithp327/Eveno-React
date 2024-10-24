import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
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
import { SafeAreaView } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Explore4() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isvisible, setIsVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.primary }]}>
            <ImageBackground source={theme.maplocation4} resizeMode='stretch' style={{ height: height, width: width, }}>
                <View style={{ marginTop: 50, borderRadius: 15, backgroundColor: theme.bg, paddingVertical: 10, paddingHorizontal: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='location' color={Colors.primary} size={15} />
                            <Text style={[style.b14, { color: theme.txt, marginLeft: 5 }]}>Location (within 10 km)</Text>
                        </View>
                        <Text style={[style.b16, { color: theme.txt, marginLeft: 2, marginTop: 10 }]}>New York, United States</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Explore5')}
                            style={{ backgroundColor: Colors.primary, borderRadius: 15, paddingVertical: 5, paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icons name='pencil' color={Colors.secondary} size={15} />
                                <Text style={[style.b14, { color: Colors.secondary, marginLeft: 5 }]}>Change</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>

                <View style={{ flex: 1, justifyContent: 'center', marginTop: -50 }}>
                    <Image source={require('../../assets/image/map3.png')} resizeMode='stretch' style={{ height: height / 2.5, width: width / 1.2, alignSelf: 'center', }} />
                </View>
            </ImageBackground>



        </SafeAreaView>
    )
}