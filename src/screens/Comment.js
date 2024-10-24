import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, RadioButton } from 'react-native-paper';
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Comment() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
                <View style={[style.main, { marginTop: 20 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        style={{ backgroundColor: 'transparent' }}
                        leading={<TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name="arrow-back" color={Colors.bg} size={25} />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { color: Colors.bg }]}>Comments</Text>

                        <View style={{ flexDirection: 'row', marginTop: 40 }}>
                            <Avatar.Image source={require('../../assets/image/d1.png')} size={50}></Avatar.Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16]}>Eugene Rodriquez</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>2 hours ago</Text>
                                <Text style={[style.r14, { lineHeight: 18, marginTop: 7 }]}>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. </Text>
                                <Text style={[style.r14, { color: Colors.primary1, marginTop: 10 }]}>Reply</Text>
                                <View style={[style.divider, { backgroundColor: Colors.active, marginTop: 15, height: 1.5 }]}></View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Avatar.Image source={require('../../assets/image/d2.png')} size={50}></Avatar.Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16]}>Mabel Hansen</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>3 hours ago</Text>
                                <Text style={[style.r14, { lineHeight: 18, marginTop: 7 }]}>I am upset. At this moment, as I sit here typing this up, I am truly upset. Something happened a little while ago.</Text>
                                <Text style={[style.r14, { color: Colors.primary1, marginTop: 10 }]}>Reply</Text>
                                <View style={[style.divider, { backgroundColor: Colors.active, marginTop: 15, height: 1.5 }]}></View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Avatar.Image source={require('../../assets/image/d3.png')} size={50}></Avatar.Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m16]}>Augusta Welch</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>5 hours ago</Text>
                                <Text style={[style.r14, { lineHeight: 18, marginTop: 7 }]}>Global Resorts Network Grn Putting Timeshares To Shame</Text>
                                <Text style={[style.r14, { color: Colors.primary1, marginTop: 10 }]}>Reply</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <View style={{ backgroundColor: '#20242F', flexDirection: 'row', alignItems: 'center', paddingRight: 20 }}>
                    <View style={[style.txtinput, { marginTop: 12, marginBottom: 20, backgroundColor: Colors.disable, height: 40, flex: 1 }]}>
                        <TextInput placeholder='Write a comment ...'
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.secondary}
                            style={[style.r16, { color: Colors.active, flex: 1, }]}
                        ></TextInput>
                    </View>
                    <Icon name='send' size={25} color={Colors.primary1}></Icon>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}