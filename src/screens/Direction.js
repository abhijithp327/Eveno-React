import { View, Text, ImageBackground, Dimensions, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Direction() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ImageBackground source={theme.direction} resizeMode='stretch' style={{ height: height, width: width }}>
                <View style={{ backgroundColor: theme.bg ,paddingTop:20}}>
                    <AppBar
                        color={theme.bg}
                        title='Direction'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        style={{ marginHorizontal: 20 }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('EventLocation')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}