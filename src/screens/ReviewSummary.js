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
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ReviewSummary() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Review Summary'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('PaymentMethod2')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ padding: 5,marginTop:20 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m24.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 4 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>National Music Festi...</Text>
                                <Text style={[style.r12, { color: Colors.default, marginTop: 8 }]}>Mon, Dec 24 • 18.00 - 23.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>

                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={[style.shadow, { backgroundColor: theme.borderbg, borderRadius: 15, padding: 15 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>Full Name</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>Andrew Ainsley</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>Phone</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>+1 111 467 378 399</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>Email</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>andrew_ainsley@yo...com</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={[style.shadow, { backgroundColor: theme.borderbg, borderRadius: 15, padding: 15 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>1 Seats (Economy)</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>$50.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>Tax</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>$5.00</Text>
                            </View>
                            <View style={[style.divider, { marginVertical: 10, backgroundColor: theme.border }]}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b14, { color: theme.disable2 }]}>Total</Text>
                                <Text style={[style.b16, { color: theme.disable1 }]}>$55.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <View style={[style.shadow, { backgroundColor: theme.borderbg, borderRadius: 15, padding: 15,flexDirection:'row' ,alignItems:'center'}]}>
                            <Image source={require('../../assets/image/master.png')}
                                style={{ resizeMode: 'stretch', height: height / 30, width: width / 10.5 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>•••• •••• •••• •••• 4679</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <TouchableOpacity>
                                    <Text style={[style.b16,{color:Colors.default}]}>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('OtpBooking')}
                        style={[style.btn, ]}>
                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}