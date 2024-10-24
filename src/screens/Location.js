import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Location() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area]}>
            <ImageBackground source={theme.location} resizeMode='stretch' style={{ height: height, width: width }}>
                <View style={{ flex: 0.6 }}>
                    <View style={{ backgroundColor: theme.bg,marginTop:20 }}>
                        <AppBar
                            color={theme.bg}
                            elevation={0}
                            title='Set your Location'
                            titleStyle={[style.apptitle, { color: theme.txt }]}
                            style={{ marginHorizontal: 20 }}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('Profilefill')}>
                                <Icon name="arrow-back"
                                    // style={{backgroundColor:Colors.secondary,}}  
                                    color={theme.txt} size={30}
                                />
                            </TouchableOpacity>
                            } />
                    </View>
                </View>

                <View style={{ flex: 0.5, backgroundColor: theme.bg, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                        <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center' }]}>Location</Text>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 20 }]}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.input, paddingHorizontal: 10, borderRadius: 12, height: 50 }}>
                            <Text style={[style.b14, { color: theme.txt }]}>Times Square NYC, Manhattan</Text>
                            <Icon name='location' color={Colors.default} size={20} />
                        </View>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 20 }]}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('PhotoId')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}