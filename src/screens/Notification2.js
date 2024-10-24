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

export default function Notification2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Notification'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name='ellipsis-horizontal-circle' size={30} color={theme.txt} />}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginTop: 20 ,alignItems:'center'}}>
                        <Avatar.Icon icon='calendar-month-outline' size={50} style={{ backgroundColor: theme.btn }} color={Colors.default} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Booking Successful!</Text>
                            <Text style={[style.r16, { color: theme.txt ,marginTop:5}]}>20 Dec, 2022 | 20:49 PM</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <TouchableOpacity style={{paddingVertical:3,backgroundColor:Colors.default,borderRadius:5,paddingHorizontal:7,alignItems:'center'}}>
                            <Text style={[style.r12, { color: Colors.secondary ,textAlign:'center'}]}>New</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[style.r14, { color: theme.disable1,marginTop:10}]}>You have successfully booked the Art Workshops. The event will be held on Sunday, December 22, 2022, 13.00 - 14.00 PM. Don't forget to activate your reminder. Enjoy the event!</Text>
                    
                    <View style={{ flexDirection: 'row', marginTop: 30 ,alignItems:'center'}}>
                        <Avatar.Icon icon='calendar-month-outline' size={50} style={{ backgroundColor: theme.btn }} color={Colors.default} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Booking Successful!</Text>
                            <Text style={[style.r16, { color: theme.txt ,marginTop:5}]}>19 Dec, 2022 | 18:35 PM</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <TouchableOpacity style={{paddingVertical:3,backgroundColor:Colors.default,borderRadius:5,paddingHorizontal:7,alignItems:'center'}}>
                            <Text style={[style.r12, { color: Colors.secondary ,textAlign:'center'}]}>New</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[style.r14, { color: theme.disable1,marginTop:10}]}>You have successfully booked the National Music Festival. The event will be held on Monday, December 24, 2022, 18.00 - 23.00 PM. Don't forget to activate your reminder. Enjoy the event!</Text>
                
                    <View style={{ flexDirection: 'row', marginTop: 30 ,alignItems:'center'}}>
                        <Avatar.Icon icon='ticket' size={50} style={{ backgroundColor: '#FB940020' }} color='#FB9400'/>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>New Services Available!</Text>
                            <Text style={[style.r16, { color: theme.txt ,marginTop:5}]}>14 Dec, 2022 | 10:52 AM</Text>
                        </View>
                    </View>
                    <Text style={[style.r14, { color: theme.disable1,marginTop:10}]}>You can now make multiple book events at once. You can also cancel your booking.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 30 ,alignItems:'center'}}>
                        <Avatar.Icon icon='wallet' size={50} style={{ backgroundColor: Colors.orange }} color={Colors.secondary}/>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Credit Card Connected!</Text>
                            <Text style={[style.r16, { color: theme.txt ,marginTop:5}]}>12 Dec, 2022 | 15:38 AM</Text>
                        </View>
                    </View>
                    <Text style={[style.r14, { color: theme.disable1,marginTop:10}]}>Your credit card has been successfully linked with Eveno. Enjoy our service.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 30 ,alignItems:'center'}}>
                        <Avatar.Icon icon='account' size={50} style={{ backgroundColor: '#22BB9C20' }} color='#22BB9C'/>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>New Services Available!</Text>
                            <Text style={[style.r16, { color: theme.txt ,marginTop:5}]}>14 Dec, 2022 | 14:27 PM</Text>
                        </View>
                    </View>
                    <Text style={[style.r14, { color: theme.disable1,marginTop:10,marginBottom:20}]}>Your account creation is successful, you can now experience our services.</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}