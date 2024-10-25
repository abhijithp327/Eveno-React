import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal, Switch } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'
import { SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners'
import { logout } from '../redux/features/authSlice'



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile() {

    const dispatch = useDispatch();
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState('false')

    const [user, setUser] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            const getUserFromStorage = async () => {
                try {
                    const userData = await AsyncStorage.getItem('user');
                    if (userData) {
                        setUser(JSON.parse(userData));
                    } else {
                        // No user found, redirect to login
                        navigation.replace('Login');
                    }
                } catch (error) {
                    console.error('Error fetching user from AsyncStorage:', error);
                    navigation.replace('Login');
                }
            };
            getUserFromStorage();

            // Optional: Return cleanup function
            return () => {
                setUser(null); // Clear user data when screen loses focus
            };
        }, [])
    );

    console.log('user: ', user);

    const handleLogout = async () => {
        try {
            await dispatch(logout());
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error during logout: ', error);
        }
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>
                <View style={{ backgroundColor: theme.bg, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/image/logo1.png')} resizeMode='stretch' style={{ height: height / 35, width: width / 15 }} />
                        <Text style={[style.apptitle, { color: theme.txt, marginLeft: 10 }]}>Profile</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='ellipsis-horizontal-circle' color={Colors.active} size={25} style={{ marginRight: 5 }} />

                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={require('../../assets/image/user.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3.2 }} />
                    <Text style={[style.title, { color: theme.txt, marginTop: 15 }]}>{user?.name}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.title, { color: theme.txt, }]}>12</Text>
                            <Text style={[style.r16, { color: theme.disable2, marginTop: 10 }]}>Events</Text>
                        </View>
                        <View style={[style.verticaldivider, { backgroundColor: theme.border, height: '80%' }]}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.title, { color: theme.txt, }]}>7,389</Text>
                            <Text style={[style.r16, { color: theme.disable2, marginTop: 10 }]}>Followers</Text>
                        </View>
                        <View style={[style.verticaldivider, { backgroundColor: theme.border, height: '80%' }]}></View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.title, { color: theme.txt, }]}>125</Text>
                            <Text style={[style.r16, { color: theme.disable2, marginTop: 10 }]}>Following</Text>
                        </View>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='calendar-month-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Manage Events</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='chatbubble-ellipses-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Message Center</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile2')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='account-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Profile</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='bell-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Notification</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='wallet-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Payments</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Linkaccount')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='swap-vertical' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Linked Account</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='ticket' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Ticket Issue</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Security')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='shield-checkmark-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Security</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Language')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='google-circles-communities' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Language</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10, marginRight: 5 }]}>English(US)</Text>
                            <Icons name='chevron-right' color={theme.txt} size={30} />
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='eye-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Dark Mode</Text>
                        </View>
                        <View style={{ marginRight: 6 }}>
                            <Switch
                                value={darkMode}
                                onValueChange={
                                    (value) => {
                                        setDarkMode(value);
                                        EventRegister.emit('ChangeTheme', value)
                                    }
                                }
                            />
                        </View>

                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => navigation.navigate('Helpcenter')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='information-circle-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Help Center</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Invited')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='account-group-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Invite Friends</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-outline' size={25} color={theme.txt} />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 10 }]}>Rate Us</Text>
                        </View>
                        <Icons name='chevron-right' color={theme.txt} size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.RBSheet8.close();
                        handleLogout();
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 90 }}>
                        <RBSheet ref={ref => {
                            this.RBSheet8 = ref;
                        }}
                            height={200}
                            openDuration={100}
                            customStyles={{
                                container: {
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    backgroundColor: theme.bg
                                }
                            }}>
                            <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                <Text style={[style.apptitle, { textAlign: 'center', color: '#F75555' }]}>Logout</Text>
                                <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                <Text style={[style.subtitle, { textAlign: 'center', color: theme.txt }]}>Are you sure you want to log out?</Text>
                                <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity onPress={() => this.RBSheet8.close()}
                                            style={[style.btn, { backgroundColor: theme.btn }]}>
                                            <Text style={[style.btntxt, { color: Colors.primary }]}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}></View>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity onPress={() => { this.RBSheet8.close(), navigation.navigate('Login') }}
                                            style={[style.btn,]}>
                                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Yes, Logout</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </RBSheet>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='logout' size={25} color="#F75555" />
                            <Text style={[style.b18, { color: '#F75555', marginLeft: 10 }]}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}