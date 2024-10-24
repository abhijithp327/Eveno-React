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
import TopNavigator from '../navigator/TopNavigator'
import All from './All'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Popular() {
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
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Popular Event 🔥'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name='search' size={25} color={theme.txt} />}
                />

                <TopNavigator></TopNavigator>

                {/* <ScrollView showsVerticalScrollIndicator={false}>
                

                    <View style={{ flexDirection: 'row',marginTop:20 }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p1.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Art Workshops</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Fri, Dec 20 • 13.00 - 15.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Wa...</Text>
                                    <TouchableOpacity onPress={()=>setL1(!L1)}>
                                    <Icon name={L1?'heart':'heart-outline'} size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p2.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Music Concert</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Tue, Dec 19 • 19.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Ne...</Text>
                                    <TouchableOpacity onPress={()=>setL2(!L2)}>
                                    <Icon name={L2?'heart':'heart-outline'} size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p3.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Tech Seminar</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Sat, Dec 22 • 10.00 - 12.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Auditorium Build...</Text>
                                    <TouchableOpacity onPress={() => setL3(!L3)}>
                                        <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p4.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Mural Painting</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Sun, Dec 16 • 11.00 - 13.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>City Space, New...</Text>
                                    <TouchableOpacity onPress={() => setL4(!L4)}>
                                        <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p5.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Fitness & Gym...</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Thu, Dec 21 • 09.00 - 12.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Health Center, W...</Text>
                                    <TouchableOpacity onPress={() => setL5(!L5)}>
                                        <Icon name={L5 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p6.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>DJ Music & Co...</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Mon, Dec 16 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Building, ...</Text>
                                    <TouchableOpacity onPress={() => setL6(!L6)}>
                                        <Icon name={L6 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p7.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Jazz Festival</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Sun, Dec 24 • 19.00 - 23.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, N...</Text>
                                    <TouchableOpacity onPress={() => setL7(!L7)}>
                                        <Icon name={L7 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p8.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Music Concert</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginVertical: 5 }]}>Sat, Dec 22 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, W...</Text>
                                    <TouchableOpacity onPress={() => setL8(!L8)}>
                                        <Icon name={L8 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView> */}
            </View>
        </SafeAreaView>
    )
}