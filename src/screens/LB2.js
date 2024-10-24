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

const LB2 = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>

            <ImageBackground source={require('../../assets/image/d16.png')} style={{ flex: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
                    <View style={[style.main, { marginTop: 20 }]}>
                        <AppBar
                            color={Colors.secondary}
                            elevation={0}
                            style={{ backgroundColor: 'transparent' }}
                            leading={<TouchableOpacity
                                onPress={() => navigation.navigate('MyTabs')}
                            >
                                <Icon name="close" color={Colors.secondary} size={25} />
                            </TouchableOpacity>
                            }
                            trailing={<View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <TouchableOpacity>
                                    <Icons name='arrange-bring-forward' size={25} color={Colors.secondary}></Icons>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon name='sunny' size={25} color={Colors.secondary} style={{ marginHorizontal: 20 }}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icons name='set-left-center' size={25} color={Colors.secondary}></Icons>
                                </TouchableOpacity>

                            </View>
                            }
                        />

                        <View style={{ flex: 1, justifyContent: 'center' }}>

                            <View style={[style.txtinput, { marginTop: 10, borderBottomWidth: 1, borderRadius: 0, backgroundColor: 'transparent', borderBottomColor: Colors.secondary }]}>
                                <TextInput placeholder='Tap to add a description...'
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={Colors.secondary}
                                    style={[style.r16, { color: Colors.secondary, flex: 1, textAlign: 'center' }]}
                                ></TextInput>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('AddBank2')}
                                style={[{ marginVertical: 40 }]}>
                                <LinearGradient
                                    colors={[Colors.primary, Colors.primary1]} style={[style.btn, { marginHorizontal: 15 }]}>
                                    <Text style={[style.btntxt]}>Start Live Broadcast</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default LB2;