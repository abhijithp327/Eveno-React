import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarStyle: { height:50,marginVertical:30,marginHorizontal:2},
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarShowLabel: true,
                tabBarItemStyle: { marginHorizontal: -10 },
                tabBarIndicatorStyle: { backgroundColor: Colors.default },
                swipeEnabled: false,

            }}>
            <Tab.Screen name="Upcoming" component={Upcoming}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Upcoming</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Completed" component={Completed}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Completed</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Cancelled" component={Cancelled}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Cancelled</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

const Upcoming = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>

            <View style={{ padding: 5 }}>
                <View style={[style.shadow, { backgroundColor: theme.borderbg, backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/u1.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>National Music Festi...</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Mon, Dec 24 • 18.00 - 23.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Grand Park, New ...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 10, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.orange }]}>Paid</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => this.RBSheet6.open()}
                            style={[style.btn, { flex: 1, backgroundColor: theme.borderbg, paddingVertical: 8, borderColor: Colors.default, borderWidth: 1 }]}>

                            <RBSheet ref={ref => {
                                this.RBSheet6 = ref;
                            }}
                                height={300}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg
                                    }
                                }}>
                                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                                    <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Cancel Booking</Text>
                                    <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                    <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Are you sure you want to cancel this event?</Text>
                                    <Text style={[style.r16, { textAlign: 'center', color: theme.txt, marginTop: 15 }]}>Only 80% of funds will be returned to your account according to our policy.</Text>
                                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity onPress={() => this.RBSheet6.close()}
                                                style={[style.btn, { backgroundColor: theme.btn }]}>
                                                <Text style={[style.btntxt, { color: Colors.default }]}>No, Don't Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginHorizontal: 10 }}></View>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity onPress={() => { this.RBSheet6.close(), navigation.navigate('Cancelreason') }}
                                                style={[style.btn,]}>
                                                <Text style={[style.btntxt, { color: Colors.secondary }]}>Yes, Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </RBSheet>
                            <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>Cancel Booking</Text>
                        </TouchableOpacity>
                        <View style={{ margin: 5 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('ETicket')}
                            style={[style.btn, { flex: 1, paddingVertical: 8 }]}>
                            <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ padding: 5, marginTop: 10 }}>
                <View style={[style.shadow, { backgroundColor: theme.borderbg, backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/u2.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Art & Mural Worksh...</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Wed, Dec 27 • 14.00 - 16.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Central Art, Was...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 10, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.orange }]}>Paid</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => this.RBSheet6.open()}
                            style={[style.btn, { flex: 1, backgroundColor: theme.borderbg, paddingVertical: 8, borderColor: Colors.default, borderWidth: 1 }]}>
                            <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>Cancel Booking</Text>
                        </TouchableOpacity>
                        <View style={{ margin: 5 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('ETicket')}
                            style={[style.btn, { flex: 1, paddingVertical: 8 }]}>
                            <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const Completed = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: height / 1.05 }}>
                <View style={{ padding: 5 }}>
                    <View style={[style.shadow, { backgroundColor: theme.borderbg, backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/c1.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>Art & Painting Train...</Text>
                                <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Wed, Dec 26 • 18.00 - 21.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.orange}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Central Art, ...</Text>
                                    <TouchableOpacity style={{ borderColor: '#07BD74', borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                        <Text style={[style.r10, { color: '#07BD74' }]}>Completed</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => this.RBSheet5.open()}
                                style={[style.btn, { flex: 1, backgroundColor: theme.borderbg, paddingVertical: 8, borderColor: Colors.default, borderWidth: 1 }]}>
                                <RBSheet ref={ref => {
                                    this.RBSheet5 = ref;
                                }}
                                    height={500}
                                    openDuration={100}
                                    customStyles={{
                                        container: {
                                            borderTopRightRadius: 20,
                                            borderTopLeftRadius: 20,
                                            backgroundColor: theme.bg
                                        }
                                    }}>
                                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Leave a Review</Text>
                                        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                                            <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                            <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>How was your experience with Art & Painting Training?</Text>
                                            <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                <TouchableOpacity onPress={() => setL1(!L1)}>
                                                    <Icon name={L1 ? 'star' : 'star-outline'} color={Colors.orange} size={30} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setL2(!L2)}>
                                                    <Icon name={L2 ? 'star' : 'star-outline'} color={Colors.orange} size={30} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setL3(!L3)}>
                                                    <Icon name={L3 ? 'star' : 'star-outline'} color={Colors.orange} size={30} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setL4(!L4)}>
                                                    <Icon name={L4 ? 'star' : 'star-outline'} color={Colors.orange} size={30} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setL5(!L5)}>
                                                    <Icon name={L5 ? 'star' : 'star-outline'} color={Colors.orange} size={30} />
                                                </TouchableOpacity>

                                            </View>
                                            <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                            <Text style={[style.apptitle, { color: theme.txt }]}>Write your Review</Text>
                                            <View style={[style.txtinput, { borderColor: theme.border, backgroundColor: theme.btn, marginTop: 15, height: 100, }]}>
                                                <TextInput placeholder='Your review here..' placeholderTextColor={Colors.disable} selectionColor={Colors.default}
                                                    multiline={true}

                                                    style={[style.r14, { color: theme.txt, textAlignVertical: 'top' }]} />
                                            </View>
                                            <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50 }}>
                                                <View style={{ flex: 1 }}>
                                                    <TouchableOpacity onPress={() => this.RBSheet5.close()}
                                                        style={[style.btn, { backgroundColor: theme.btn }]}>
                                                        <Text style={[style.btntxt, { color: Colors.default }]}>Maybe Later</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginHorizontal: 10 }}></View>
                                                <View style={{ flex: 1 }}>
                                                    <TouchableOpacity
                                                        style={[style.btn,]}>
                                                        <Text style={[style.btntxt, { color: Colors.secondary }]}>Submit</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </ScrollView>
                                    </View>
                                </RBSheet>
                                <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>Leave a Review</Text>


                            </TouchableOpacity>
                            <View style={{ margin: 5 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ETicket')}
                                style={[style.btn, { flex: 1, paddingVertical: 8 }]}>
                                <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[style.shadow, { backgroundColor: theme.borderbg, backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/c2.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>DJ & Music Concert,...</Text>
                                <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Tue, Dec 30 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.orange}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>New Avenue, ...</Text>
                                    <TouchableOpacity style={{ borderColor: '#07BD74', borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4, }}>
                                        <Text style={[style.r10, { color: '#07BD74' }]}>Completed</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => this.RBSheet5.open()}
                                style={[style.btn, { flex: 1, backgroundColor: theme.borderbg, paddingVertical: 8, borderColor: Colors.default, borderWidth: 1 }]}>
                                <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 5 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ETicket')}
                                style={[style.btn, { flex: 1, paddingVertical: 8 }]}>
                                <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[style.shadow, { backgroundColor: theme.borderbg, backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/c3.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                            <View style={{ marginLeft: 10, }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>Fitness & Gym Train...</Text>
                                <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Sun, Dec 24 • 19.00 - 23.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.orange}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Grand Build, ...</Text>
                                    <TouchableOpacity style={{ borderColor: '#07BD74', borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                        <Text style={[style.r10, { color: '#07BD74' }]}>Completed</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => this.RBSheet5.open()}
                                style={[style.btn, { flex: 1, backgroundColor: theme.bordrbg, paddingVertical: 8, borderColor: Colors.default, borderWidth: 1 }]}>
                                <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 5 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ETicket')}
                                style={[style.btn, { flex: 1, paddingVertical: 8 }]}>
                                <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Cancelled = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: height / 1.2 }}>
                <View style={{ padding: 5 }}>
                    <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <Image source={require('../../assets/image/t1.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Traditional Dance Fe...</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Tue, Dec 16 • 18.00 - 22.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>New Avenue...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.default }]}>cancelled</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <Image source={require('../../assets/image/t2.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Painting Workshops</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Sun, Dec 23 • 19.00 - 23.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Grand Park, ...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.default }]}>cancelled</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <Image source={require('../../assets/image/t3.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Gebyar Music Festiv...</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Thu, Dec 20 • 17.00 - 22.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Central Hall, ...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.default }]}>cancelled</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                        <Image source={require('../../assets/image/t4.png')} resizeMode='stretch' style={{ height: height / 8.5, width: width / 3.6 }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>National Concert of ...</Text>
                            <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Icon name='location' size={20} color={Colors.orange}></Icon>
                                <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5, }]}>Central Park...</Text>
                                <TouchableOpacity style={{ borderColor: Colors.default, borderWidth: 1, paddingHorizontal: 7, paddingBottom: 6, borderRadius: 10, paddingTop: 4 }}>
                                    <Text style={[style.r10, { color: Colors.default }]}>cancelled</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default function TicketTab() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>

                    <View >
                        <Avatar source={require('../../assets/image/Logo2.png')}
                            size={40}></Avatar>
                    </View>

                    <Text style={[style.apptitle, { color: theme.txt, flex: 1, marginLeft: 2 }]}>Tickets</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Messagedelete')}>
                            <Icon name='search' size={30} color={theme.txt}></Icon>
                        </TouchableOpacity>

                        <View style={{ margin: 10 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('MessageN')}>
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={30} />
                        </TouchableOpacity>

                    </View>

                </View>

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}