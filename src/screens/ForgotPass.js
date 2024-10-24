import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/features/authSlice';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ForgotPass() {

    const dispatch = useDispatch();

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await dispatch(forgotPassword({ email }));


            if (response.payload && response.payload.success) {
                Alert.alert('Success', response.payload.message);
                setEmail('');
                navigation.navigate('Login');
            } else {
                Alert.alert('Error', response.payload.message);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            Alert.alert('Error', 'Failed to send reset instructions');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Forgot Password'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={require('../../assets/image/forgot.png')}
                        resizeMode='stretch'
                        style={{
                            height: height / 3.5,
                            width: width / 1.4,
                            alignSelf: 'center',
                            marginTop: 30
                        }}
                    />

                    <Text style={[style.r18, {
                        color: theme.txt,
                        marginTop: 35,
                        textAlign: 'center',
                        marginBottom: 20
                    }]}>
                        Enter your email address to receive password reset instructions
                    </Text>

                    <View style={{
                        borderWidth: 1,
                        borderRadius: 12,
                        borderColor: theme.border,
                        backgroundColor: theme.borderbg,
                        marginTop: 20,
                        paddingHorizontal: 15,
                    }}>
                        <TextInput
                            placeholder="Enter your email"
                            placeholderTextColor={theme.disable}
                            value={email}
                            onChangeText={setEmail}
                            style={{
                                color: theme.txt,
                                height: 50,
                                fontSize: 16,
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={{ marginTop: 40, marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={handleResetPassword}
                            style={[
                                style.btn,
                                { opacity: isLoading ? 0.7 : 1 }
                            ]}
                            disabled={isLoading}
                        >
                            <Text style={style.btntxt}>
                                {isLoading ? 'Sending...' : 'Send Reset Link'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}