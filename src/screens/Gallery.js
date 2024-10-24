import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Gallery() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Gallery (Pre-Event)'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name='ellipsis-horizontal-circle' size={25} color={theme.txt} />}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 20, flexDirection: 'row' ,justifyContent:'space-evenly'}}>
                        <Image source={require('../../assets/image/p2.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m3.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m8.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row',justifyContent:'space-evenly' }}>
                        <Image source={require('../../assets/image/m9.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m10.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m11.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' ,justifyContent:'space-evenly'}}>
                        <Image source={require('../../assets/image/m12.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m13.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m14.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' ,justifyContent:'space-evenly'}}>
                        <Image source={require('../../assets/image/m15.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m16.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m17.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row',justifyContent:'space-evenly' }}>
                        <Image source={require('../../assets/image/m18.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m19.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m20.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'row',justifyContent:'space-evenly' }}>
                        <Image source={require('../../assets/image/m21.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                        <Image source={require('../../assets/image/m22.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7, marginHorizontal: 10 }} />
                        <Image source={require('../../assets/image/m23.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7 }} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}