import {
    View, Text, Dimensions,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { BallIndicator, } from 'react-native-indicators'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Get token from AsyncStorage
                const token = await AsyncStorage.getItem('token');

                if (token) {
                    // Token exists, navigate to the Home screen
                    navigation.navigate('BottomNavigator');
                } else {
                    // No token found, navigate to the Login screen
                    navigation.navigate('Login');
                }
            } catch (error) {
                console.error('Failed to load token from AsyncStorage:', error);
                // In case of error, navigate to Login
                navigation.navigate('Login');
            }
        };

        // Wait for 2 seconds to show the splash screen
        const timeout = setTimeout(() => {
            checkAuth();
        }, 2000);

        // Clean up timeout when component unmounts
        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image source={require('../../assets/image/easyGo.png')}
                    style={{
                        resizeMode: 'contain',
                        height: height / 6,
                        width: width / 2,
                    }}
                />
            </View>
            <View style={{
                flex: 0.5,
                alignItems: 'center',
            }}>
                <View style={{ marginBottom: 50 }}>
                    <BallIndicator size={30} color={Colors.default} />
                </View>
            </View>
        </SafeAreaView>
    )
}