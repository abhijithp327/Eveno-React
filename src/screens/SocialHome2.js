import { View, Text, SafeAreaView, Dimensions, ImageBackground, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { AppBar, HStack } from '@react-native-material/core';
// import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home2() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: '#fff' }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height/1.1 : height/1.25 }}>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={[style.title, { color: Colors.secondary, }]}>What's new?</Text>
                    <Avatar.Image source={require('../../assets/image/s32.png')} size={36} style={{ backgroundColor: Colors.bg }} />
                </View> */}
                <View style={{ marginVertical: 15,marginTop:20 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View>
                            <ImageBackground source={require('../../assets/image/s33.png')} resizeMode='stretch' style={{ height: height / 6, width: width / 2.5, }} >
                                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F78361', '#F54B64',]}
                                    style={{ flexDirection: 'row', alignItems: 'center', height: height / 42, width: width / 5.8, borderRadius: 15, justifyContent: 'center', position: 'absolute', top: 10, right: 10 }} >
                                    <Icons name="video" color={Colors.secondary} size={16} />
                                    <Text style={[style.r12, { marginLeft: 3 }]}>LIVE</Text>
                                </LinearGradient>
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar.Image source={require('../../assets/image/s34.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                                </View>
                                <Text style={[style.r12, { color: Colors.bg1, marginLeft: 5 }]}>Thomas Curtis</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('UProfile1')}style={{ marginHorizontal: 12 }}>
                            <ImageBackground source={require('../../assets/image/s35.png')} resizeMode='stretch' style={{ height: height / 6, width: width / 2.5, }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar.Image source={require('../../assets/image/s36.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                                </View>
                                <Text style={[style.r12, { color: Colors.bg1, marginLeft: 5 }]}>Christine Barton</Text>
                            </View>
                        </TouchableOpacity>
                        <View >
                        <TouchableOpacity onPress={() => navigation.navigate('UProfile3')}>
                            <ImageBackground source={require('../../assets/image/s37.png')} resizeMode='stretch' style={{ height: height / 6, width: width / 2.5, }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1.34, borderColor: Colors.btntxt, alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar.Image source={require('../../assets/image/s38.png')} size={22} style={{ backgroundColor: Colors.bg }} />
                                </View>
                                <Text style={[style.r12, { color: Colors.bg1, marginLeft: 5 }]}>Nathan McKinney</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                       
                    </ScrollView>
                </View>
                <View style={{padding:5}}>
                <View style={[style.shadow, { padding: 12, marginVertical: 15, backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s39.png')} size={50} style={{ backgroundColor: Colors.bg }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b16, { color: Colors.bg1, }]}>Christina Kennedy</Text>
                            <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>2 hours ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/image/s40.png')} style={{ height: height / 6, width: width / 2.5, resizeMode: 'stretch' }} />

                        <View style={{ width: width / 2.5, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/s41.png')} style={{ height: height / 12, width: width / 5.1, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 3 }}></View>
                                <Image source={require('../../assets/image/s42.png')} style={{ height: height / 12, width: width / 5.1, resizeMode: 'stretch' }} />
                            </View>
                            <View style={{ marginVertical: 3 }}></View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../assets/image/s43.png')} style={{ height: height / 12, width: width / 5.1, resizeMode: 'stretch' }} />
                                <View style={{ marginHorizontal: 3 }}></View>
                                <ImageBackground source={require('../../assets/image/s44.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 5.1, }} >
                                    <ImageBackground source={require('../../assets/image/s44bg.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 5.1, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={[style.b18, { color: Colors.secondary, }]}>+23</Text>
                                    </ImageBackground>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                    <Text style={[style.m14, { color: Colors.btntxt, marginTop: 10 }]}>#relax, #travel</Text>
                    <Text style={[style.r14, { color: Colors.lable, marginTop: 3 }]}>If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                                <Text style={[style.r14, { marginLeft: 5 }]}>1125</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                                <Text style={[style.r14, { marginLeft: 5 }]}>348</Text>
                            </View>
                        </View>

                        <Image source={require('../../assets/image/d8.png')} resizeMode='stretch' style={{ height: height / 25, width: width / 5 }}></Image>
                    </View>
                </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}