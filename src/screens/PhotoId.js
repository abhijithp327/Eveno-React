import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function PhotoId() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: '#35383F' }]}>
            <View style={[style.main, { backgroundColor: '#35383F', marginTop: 20 }]}>
                <AppBar
                    // color={theme.bg}
                    elevation={0}
                    style={{ backgroundColor: 'transparent' }}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={Colors.secondary} size={30}
                        />
                    </TouchableOpacity>
                    } />
                <Text style={[style.title, { color: Colors.secondary, textAlign: 'center', fontSize: 30, marginTop: 15 }]}>Photo ID Card</Text>
                <Text style={[style.r18, { color: Colors.secondary, textAlign: 'center', marginTop: 5 }]}>Please point the camera at the ID card</Text>
                <View style={{ height: height / 2.5, width: width / 1.2, alignSelf: 'center', backgroundColor: theme.bg, borderRadius: 32, marginTop: 30 }}>
                    <Image source={require('../../assets/image/photo.png')} resizeMode='stretch' style={{ height: height / 2.5, width: width / 1.2, alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', alignSelf: 'center',  }}>
                    {/* <Avatar icon={<Icon name='image'/>}></Avatar> */}
                    <TouchableOpacity>
                    <Avatar.Icon icon='image' color={Colors.default} size={50} style={{backgroundColor:'#EEEDFE'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Selfi')}>
                    <Avatar.Icon icon='line-scan' color={Colors.secondary} size={80} style={{backgroundColor:Colors.default,marginHorizontal:15}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Avatar.Icon icon='folder' color={Colors.default} size={50} style={{backgroundColor:'#EEEDFE'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}