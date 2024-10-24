import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import style from '../theme/style';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width, backgroundColor: theme.bg, }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 2.3, marginTop: 20, backgroundColor: theme.bg }}>
                <ImageBackground source={item.bg} resizeMode='stretch'
                    style={{ width: width / 1.3, height: height / 2, alignSelf: 'center' }}>
                    <Image source={item.img} resizeMode='stretch' style={{ width: width / 1.2, height: height / 2, alignSelf: 'center', marginTop: 40 }} />
                </ImageBackground>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: theme.bg,
                paddingHorizontal: 18,
                paddingTop: 15,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50
            }}>
                <Text style={[style.title, { textAlign: 'center', color: Colors.orange }]}>{item.title1}</Text>
                <View style={{ paddingTop: 15 }}>
                    <Text style={[style.txt, { color: theme.disable1, textAlign: 'center' }]}>{item.subtitle}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}