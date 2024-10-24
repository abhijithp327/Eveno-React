import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor:theme.bg},
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarShowLabel: true,
                tabBarItemStyle: { marginHorizontal: -10 },
                tabBarIndicatorStyle: { backgroundColor: Colors.primary },
                swipeEnabled:false,
            }}>
            <Tab.Screen name="Events" component={Musiclist} />
            <Tab.Screen name="Collectins" component={All} />
            <Tab.Screen name="About" component={All} />
            {/* <Tab.Screen name="Upcoming" component={Upcoming} />
            <Tab.Screen name="SignUp" component={SignUp} /> */}
        </Tab.Navigator>
    )
}

const Musiclist = () =>{
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);
    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,}]}>
           
                
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ padding: 5 ,marginTop:10}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m2.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>International Concert</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Sun, Dec 23 • 19.00 - 23.00 PM</Text>
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

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m3.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>Jazz Music Festival</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Tue, Dec 16 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Washing...</Text>
                                    <TouchableOpacity onPress={() => setL2(!L2)}>
                                        <Icon name={L2 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m4.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>DJ Music Competition</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Thu, Dec 20 • 17.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Hall, California</Text>
                                    <TouchableOpacity onPress={() => setL3(!L3)}>
                                        <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 ,marginBottom:20}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m5.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>National Music Fest</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Chicago</Text>
                                    <TouchableOpacity onPress={() => setL4(!L4)}>
                                        <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
        </SafeAreaView>    
    )
}
export default function Organizer() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Organizer'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity >
                        <Icon name="ellipsis-horizontal-circle"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <Avatar image={require('../../assets/image/p6.png')}
                    style={{ backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20 }} size={90}></Avatar>
                <Text style={[style.title, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}> World of Music</Text>

                <View style={[style.divider, { backgroundColor: theme.border, marginTop: 20 }]}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[style.title, { color: theme.txt }]}>24</Text>
                        <Text style={[style.r16, { color: theme.disable2 }]}>Events</Text>
                    </View>
                    <View style={[style.verticaldivider, { backgroundColor: theme.border }]}></View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[style.title, { color: theme.txt }]}>967K</Text>
                        <Text style={[style.r16, { color: theme.disable2 }]}>Followers</Text>
                    </View>
                    <View style={[style.verticaldivider, { backgroundColor: theme.border }]}></View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[style.title, { color: theme.txt }]}>20</Text>
                        <Text style={[style.r16, { color: theme.disable2 }]}>Following</Text>
                    </View>
                </View>
                <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>

                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}
                        style={[style.btn, { flex: 1, backgroundColor: Colors.primary, flexDirection: 'row', justifyContent: 'center', }]}>
                        <Icon name='person-add' color={Colors.secondary} size={20}></Icon>
                        <Text style={[style.btntxt, { marginLeft: 5 }]}>Follow</Text>
                    </TouchableOpacity>
                    <View style={{ margin: 5 }}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('')}
                        style={[style.btn, { flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: theme.borderbg, borderColor: Colors.primary, borderWidth: 1 }]}>
                        <Icon name='chatbubble-ellipses-sharp' color={Colors.primary} size={20}></Icon>
                        <Text style={[style.btntxt, { color: Colors.primary, marginLeft: 5 }]}>Message</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: -10 }}></View>
                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}