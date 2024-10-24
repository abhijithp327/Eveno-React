import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext, useCallback, useRef, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import PhoneInput from 'react-native-phone-number-input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/features/countrySlice';
import { register } from '../redux/features/authSlice';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function Signup() {

  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedCountryId, setSelectedCountryId] = useState(251);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const phoneInput = useRef(null);

  const { allCountries } = useSelector(state => state.country);

  useEffect(() => {
    dispatch(getAllCountries())
  }, []);

  const handleCountryChange = (country) => {
    const countryCode = country?.cca2;
    console.log('Country code:', countryCode);

    const selectedCountry = allCountries.find(country => country.code === countryCode);
    // console.log('selectedCountry: ', selectedCountry);

    if (selectedCountry) {
      setSelectedCountryId(selectedCountry.id); // Ensure id exists
    } else {
      console.error('Country not found for  code:', countryCode);
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone: phoneNumber,
      dial_code_id: selectedCountryId,
    };

    try {
      setIsLoading(true);
      const response = await dispatch(register(userData));
      console.log("userData", userData);

      if (response.payload) {
        if (response.payload.success) {
          alert(response.payload.message);
          navigation.navigate('Login');
          // Clear the form fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setPhoneNumber('');
          setSelectedCountryId(251);
        } else {
          alert(response.payload.message || 'Registration failed');
        }
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>

        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
          {/* <AppBar
            color={theme.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('Letsin')}>
                <Icon name="arrow-back" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          /> */}

          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require('../../assets/image/easyGo.png')}
              resizeMode="contain"
              style={{
                height: height / 6,
                width: width / 2,
                alignSelf: 'center',
              }}
            />

            <View style={{ marginVertical: 20 }}>
              <Text style={[style.title, { color: theme.txt, alignSelf: 'center' }]}>
                Create New Account
              </Text>
            </View>

            {/* First Name Input */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'FirstName' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'FirstName' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <Icon name="person" size={25} color={isFocused === 'FirstName' ? Colors.default : Colors.disable} />
              <TextInput
                placeholder="First Name"
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused('FirstName')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
              />
            </View>

            {/* Last Name Input - Error State */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'LastName' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'LastName' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <Icon name="person" size={25} color={isFocused === 'LastName' ? Colors.default : Colors.disable} />
              <TextInput
                placeholder="Last Name"
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused('LastName')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                onChangeText={(text) => setLastName(text)}
                value={lastName}
              />
            </View>

            {/* Email Input - Error State */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'Email' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'Email' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <Icon name="mail" size={25} color={isFocused === 'Email' ? Colors.default : Colors.disable} />
              <TextInput
                placeholder="Email"
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused('Email')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>

            {/* Password Input */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'Password' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'Password' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <Icon name="lock-closed" size={25} color={isFocused === 'Password' ? Colors.default : Colors.disable} />
              <TextInput
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                onFocus={() => setIsFocused('Password')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={isFocused === 'Password' ? Colors.default : Colors.disable} size={20} />
              </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'ConfirmPassword' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'ConfirmPassword' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <Icon name="lock-closed" size={25} color={isFocused === 'ConfirmPassword' ? Colors.default : Colors.disable} />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={!isPasswordVisible}
                onFocus={() => setIsFocused('ConfirmPassword')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
              />
            </View>

            {/* Phone number */}
            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 20,
                  borderColor: isFocused === 'Email' ? Colors.default : theme.input,
                  borderWidth: 1,
                  backgroundColor: isFocused === 'Email' ? '#584CF410' : theme.input,
                  borderRadius: 8,
                },
              ]}
            >
              <PhoneInput
                selectionColor={Colors.default}
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode='AE'
                layout="first"
                codeTextStyle={{ color: theme.txt }}
                textInputProps={{ placeholderTextColor: '#9E9E9E' }}
                textInputStyle={{ color: theme.txt }}
                containerStyle={{
                  height: 50,
                  width: '100%',
                  borderColor: Colors.default,
                  borderRadius: 10,
                  borderWidth: 1,
                  backgroundColor: theme.input
                }}
                textContainerStyle={{
                  paddingVertical: 0,
                  borderRadius: 10,
                  backgroundColor: theme.input
                }}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
                onChangeCountry={(country) => handleCountryChange(country)}
              />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              onPress={handleSignup}
              disabled={isLoading}
              style={[
                style.btn,
                {
                  backgroundColor: Colors.default,
                  borderRadius: 8,
                  paddingVertical: 15,
                  marginVertical: 20,
                },
              ]}
            >
              {isLoading ? <ActivityIndicator color={Colors.secondary} /> : <Text style={style.btntxt}>Sign Up</Text>}
            </TouchableOpacity>

            {/* Already have an account? */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 30, marginBottom: 10 }}>
              <Text style={[style.r14, { color: theme.inputtxt }]}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[style.b14, { color: Colors.default }]}> Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}