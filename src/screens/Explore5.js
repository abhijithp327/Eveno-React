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

export default function Explore5() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isvisible, setIsVisible] = useState(false)
    const [L1, setL1] = useState(false);

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
                        <TouchableOpacity onPress={()=>navigation.navigate('BottomNavigator')}
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
                <View style={{ flex: 1, justifyContent: 'center',  }}>
                    <Image source={require('../../assets/image/map4.png')} resizeMode='stretch' style={{ height: height / 3, width: width / 1.5, alignSelf: 'center', }} />
                </View>
                <View style={{flex:0.5,justifyContent:'flex-end',marginBottom:50}}>
                    <View style={{ padding: 20 }}>

                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m25.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 4 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>National Music Festi...</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Mon, Dec 24 • 18.00 - 23.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.primary}></Icon>
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>
                                        <TouchableOpacity onPress={() => setL1(!L1)}>
                                            <Icon name={L1 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>



        </SafeAreaView>
    )
}