import {
    View, Text, Dimensions,
    SafeAreaView,
    StatusBar,
    Image,
    StyleSheet,
    Animated
} from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { BallIndicator } from 'react-native-indicators'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    const theme = useContext(themeContext)
    const navigation = useNavigation()
    const fadeAnim = useRef(new Animated.Value(0)).current
    const slideAnim = useRef(new Animated.Value(-50)).current

    useEffect(() => {
        // Fade in animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            })
        ]).start()

        const checkAuth = async () => {
            try {
                const token = await AsyncStorage.getItem('token')
                setTimeout(() => {
                    navigation.navigate(token ? 'BottomNavigator' : 'Login')
                }, 2000)
            } catch (error) {
                console.error('Failed to load token from AsyncStorage:', error)
                navigation.navigate('Login')
            }
        }

        checkAuth()
    }, [navigation, fadeAnim, slideAnim])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />

            {/* Background Image */}
            <Image
                source={require('../../assets/image/splash-back.png')}
                style={styles.backgroundImage}
            />

            {/* Overlay */}
            <View style={styles.overlay} />

            {/* Logo Container */}
            <Animated.View style={[
                styles.logoContainer,
                {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                }
            ]}>
                <Image
                    source={require('../../assets/image/easyGo.png')}
                    style={styles.logo}
                />
            </Animated.View>

            {/* Loading Indicator */}
            <View style={styles.loaderContainer}>
                <BallIndicator size={30} color={Colors.default} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: height,
        resizeMode: 'cover',
    },
    logoContainer: {
        width: '100%',
        paddingTop: StatusBar.currentHeight + 20,
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        height: height / 6,
        width: width / 2,
    },
    loaderContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
    }
})