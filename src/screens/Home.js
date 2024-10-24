import { View, Text, SafeAreaView, ImageBackground, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { color } from 'react-native-elements/dist/helpers';
import TopNavigator from '../navigator/TopNavigator';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);

    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: width * 0.05, // Adjust marginTop based on screen width
                        paddingHorizontal: width * 0.03, // Adjust horizontal padding based on screen width
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: width * 0.045 }]}>Events</Text>
                    </View>

                    {/* Create an Event Button */}
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('CreateEvent')}
                        style={{
                            marginHorizontal: width * 0.03,
                            paddingVertical: width * 0.02,
                            paddingHorizontal: width * 0.04,
                            borderWidth: 1.5,
                            borderColor: Colors.default,
                            borderRadius: 25,
                            backgroundColor: '#ffffff',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={[style.b12, { color: Colors.active, }]}>
                            Create an Event
                        </Text>
                    </TouchableOpacity> */}

                    {/* Scanner Image */}
                    <TouchableOpacity onPress={() => navigation.navigate('ScanEvent')}>
                        <Image
                            source={require('../../assets/image/scanner.png')}
                            style={{
                                width: width * 0.1, // Scale image size based on screen width
                                height: width * 0.1,
                                marginHorizontal: width * 0.04,
                            }}
                        />
                    </TouchableOpacity>

                    {/* Notification Icon */}
                    <TouchableOpacity onPress={() => navigation.navigate('Notification2')}>
                        <Avatar.Icon
                            icon='bell-outline'
                            size={width * 0.09}
                            style={{
                                backgroundColor: theme.borderbg,
                                borderWidth: 1,
                                borderColor: theme.border,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[style.inputContainer, { backgroundColor: theme.input, marginTop: 30, borderColor: theme.border }]}>
                    <Icon name="search" size={20} color={Colors.disable} />
                    <TextInput placeholder='Search...'
                        selectionColor={Colors.default}
                        placeholderTextColor={Colors.disable}
                        style={{ flex: 1, color: theme.txt, fontFamily: 'Urbanist-Regular' }} />
                    <Icon name="filter" size={20} color={Colors.default}
                        style={{ width: width / 19, height: height / 35, alignSelf: 'center' }}></Icon>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} nestedScrollEnabled={true}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>Suggested Events</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Resultlist')}>
                            <Text style={[style.b16, { color: Colors.default }]}>See all</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                            <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                                <View style={[{ padding: 10, }]}>
                                    <View style={[style.shadow, { padding: 15, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                        <Image source={require('../../assets/image/i1.png')}
                                            resizeMode='stretch'
                                            style={{ width: width / 1.5, height: height / 4.2 }}></Image>
                                        <Text style={[style.subtitle, { color: theme.txt, marginTop: 10 }]}>National Music Festival</Text>
                                        <Text style={[style.r16, { color: Colors.default, marginVertical: 5 }]}>Mon, Dec 24 • 18.00 - 23.00 PM</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='location' size={20} color={Colors.active}></Icon>
                                            <Text style={[style.r16, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>
                                            <Icon name='heart-outline' size={25} color={Colors.default}></Icon>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* <View style={{margin:10}}></View> */}

                            <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                                <View style={[{ padding: 10, }]}>
                                    <View style={[style.shadow, { padding: 15, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                        <Image source={require('../../assets/image/i2.png')}
                                            resizeMode='stretch'
                                            style={{ width: width / 1.5, height: height / 4.2 }}></Image>
                                        <Text style={[style.subtitle, { color: theme.txt, marginTop: 10 }]}>Music Concert</Text>
                                        <Text style={[style.r16, { color: Colors.default, marginVertical: 5 }]}>Tue, Dec 24 • 18.00 - 23.00 PM</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='location' size={20} color={Colors.active}></Icon>
                                            <Text style={[style.r16, { color: theme.disable2, flex: 1, marginHorizontal: 10 }]}>Avenue City, New York</Text>
                                            <Icon name='heart-outline' size={25} color={Colors.default}></Icon>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10, }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>More Events</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Resultlist')}>
                            <Text style={[style.b16, { color: Colors.default }]}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{ marginVertical: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setT1(!T1)}
                                style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, backgroundColor: T1 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T1 ? Colors.secondary : Colors.default }]}>✅ All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setT2(!T2)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, marginHorizontal: 10, backgroundColor: T2 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T2 ? Colors.secondary : Colors.default }]}>🎵 Music</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setT3(!T3)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, backgroundColor: T3 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T3 ? Colors.secondary : Colors.default }]}>💼 Workshops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setT4(!T4)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, marginHorizontal: 10, backgroundColor: T4 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T5 ? Colors.secondary : Colors.default }]}>🎨 Art</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setT5(!T5)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, backgroundColor: T5 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T5 ? Colors.secondary : Colors.default }]}>🍕 Food & Drink</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setT6(!T6)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.default, borderWidth: 1, borderRadius: 15, marginLeft: 10, backgroundColor: T6 ? Colors.default : theme.bg }}>
                                <Text style={[style.b16, { color: T6 ? Colors.secondary : Colors.default }]}>🧥 Fashion</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p1.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Art Workshops</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Fri, Dec 20 • 13.00 - 15.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Wa...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Tue, Dec 19 • 19.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Ne...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Sat, Dec 22 • 10.00 - 12.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Auditorium Build...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Sun, Dec 16 • 11.00 - 13.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>City Space, New...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Thu, Dec 21 • 09.00 - 12.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Health Center, W...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Mon, Dec 16 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Building, ...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 80 }}>
                        <View style={[{ padding: 5, flex: 1 }]}>
                            <View style={[style.shadow, { padding: 10, backgroundColor: theme.borderbg, borderRadius: 15 }]}>
                                <ImageBackground source={require('../../assets/image/p7.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6 }}></ImageBackground>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 5 }]}>Jazz Festival</Text>
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Sun, Dec 24 • 19.00 - 23.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, N...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
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
                                <Text style={[style.r12, { color: Colors.default, marginVertical: 5 }]}>Sat, Dec 22 • 18.00 - 22.00...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name='location' size={20} color={Colors.active}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, W...</Text>
                                    <TouchableOpacity>
                                        <Icon name='heart-outline' size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>




                </ScrollView>

            </View>
        </SafeAreaView>
    )
}