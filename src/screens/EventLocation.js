import { View, Text, ImageBackground, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function EventLocation() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ImageBackground source={theme.elocation} resizeMode='stretch' style={{ height: height, width: width }}>
                <View style={{ backgroundColor: theme.bg,paddingTop:20 }}>
                    <AppBar
                        color={theme.bg}
                        title='Event Location'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        style={{ marginHorizontal: 20 }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />
                </View>
                <View style={{ flex: 4 }}></View>
                <View style={{ backgroundColor: theme.bg, paddingVertical: 20, paddingHorizontal: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderColor: theme.border, borderWidth: 1 ,marginBottom:40}}>
                <TouchableOpacity onPress={() => navigation.navigate('Direction')}
                style={[style.btn]}>
                    <Text style={[style.btntxt]}>Get Direction</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </SafeAreaView>

    )
}