import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
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
import { SafeAreaView } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ResultCard() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [L6, setL6] = useState(false);
    const [L7, setL7] = useState(false);
    const [L8, setL8] = useState(false);
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,alignItems:'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>978 founds</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setselect(!select)}>
                            <Icon name='reader' size={22} color={select ? Colors.default : theme.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setisSelect(!isSelect)}
                            style={{ marginLeft: 10 }}>
                            <Icon name={isSelect ? 'grid' : 'grid-outline'} size={22} color={isSelect ? Colors.default : theme.disable} />
                        </TouchableOpacity>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginTop:10}}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m2.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>International Co...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Sun, Dec 23 • 19.00 - 23.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New...</Text>
                                    <TouchableOpacity onPress={() => setL1(!L1)}>
                                        <Icon name={L1 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m3.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Jazz Music Festi...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Tue, Dec 16 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Wa...</Text>
                                    <TouchableOpacity onPress={() => setL2(!L2)}>
                                        <Icon name={L2 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row',}}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m4.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>DJ Music Compe...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Thu, Dec 20 • 17.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Hall, Cali...</Text>
                                    <TouchableOpacity onPress={() => setL3(!L3)}>
                                        <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m5.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>National Music F...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Wed, Dec 18 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Ch...</Text>
                                    <TouchableOpacity onPress={() => setL4(!L4)}>
                                        <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row',marginBottom:20 }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m6.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>DJ Music & Conc...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Thu, Dec 21 • 09.00 - 12.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Health Center, W...</Text>
                                    <TouchableOpacity onPress={() => setL5(!L5)}>
                                        <Icon name={L5 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/m7.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>DJ Music & Conc...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Mon, Dec 16 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Building, ...</Text>
                                    <TouchableOpacity onPress={() => setL6(!L6)}>
                                        <Icon name={L6 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

        </SafeAreaView>
    )
}