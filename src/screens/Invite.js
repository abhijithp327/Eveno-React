import { View, Text, SafeAreaView, Dimensions, ImageBackground, Image, StatusBar, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
// import LinearGradient from 'react-native-linear-gradient';
// import Icon1 from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Invite() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor:'#fff' }]}>
            {/* <AppBar
                color={Colors.bg}
                style={{ paddingHorizontal: 20, paddingTop: 15 }}
                elevation={0}
                leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                    <Icon name="close" color={Colors.secondary} size={28} />
                </TouchableOpacity>}
                trailing={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                    <Text style={[style.b16, { color: Colors.btntxt }]}>Next</Text>
                </TouchableOpacity>}
            /> */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height *1.2: height/1.08}}>
                {/* <Text style={[style.title, { marginHorizontal: 20, marginTop: 10 }]}>Invite Friends</Text> */}
                {/* <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View> */}
                <View style={{ marginTop:20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s2.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Patrick Osborne</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s3.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Caleb Klein</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c2.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s4.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Lois Conner</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s5.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Jerome Gonzales</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c2.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s6.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Edith Owen</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s7.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Steven Thornton</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s8.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Brent Figueroa</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c2.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                    <View style={[style.divider, { backgroundColor: Colors.active, marginVertical: 20 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:20 }}>
                        <Avatar.Image source={require('../../assets/image/s9.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b14, {}]}>Melvin Bridges</Text>
                            <Text style={[style.m14, { color: Colors.disable, marginTop: 5 }]}>You’re friends on Facebook</Text>
                        </View>
                        <Image source={require('../../assets/image/c.png')} style={{ height: height / 26, width: width / 11, resizeMode: 'stretch' }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}