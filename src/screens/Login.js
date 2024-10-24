import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/authSlice';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login() {

  const dispatch = useDispatch();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const [isFocused, setIsFocused] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { isUserLoggedIn } = useSelector(state => state.auth);

  console.log("Loggedin", isUserLoggedIn);

  const handleLogin = async () => {

    // Validate input fields
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    try {
      // Assuming dispatch returns a promise
      const response = await dispatch(login(data));

      // console.log('response____payload___success', response.payload.success);

      if (response.payload && response.payload.success) {
        navigation.navigate('BottomNavigator');
        alert(response.payload.message);
        setEmail('');
        setPassword('');
      } else {
        alert(response.payload.message);
      }
    } catch (error) {
      console.error('Login API error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };




  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>

        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
          {/* <AppBar
            color={theme.bg}
            elevation={0}
            leading={<TouchableOpacity onPress={() => navigation.navigate('Letsin')}>
              <Icon name="arrow-back"
                color={theme.txt} size={30}
              />
            </TouchableOpacity>
            } /> */}

          <ScrollView showsVerticalScrollIndicator={false}>

            <Image source={require('../../assets/image/easyGo.png')}
              resizeMode='contain'
              style={{
                height: height / 6,
                width: width / 2,
                alignSelf: 'center',
              }}
            >
            </Image>

            <View style={{ marginVertical: 20 }}>
              <Text style={[style.title, { color: theme.txt, alignSelf: 'center' }]}>Login to Your Account</Text>
            </View>

            <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Email' ? Colors.default : theme.input, borderWidth: 1, backgroundColor: isFocused === 'Email' ? '#584CF410' : theme.input }]}>
              <Icon name='mail' size={25} color={isFocused === 'Email' ? Colors.default : Colors.disable}></Icon>
              <TextInput placeholder='Email'
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused('Email')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, fontFamily: 'Urbanist-Regular', flex: 1 }]}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={[style.inputContainer, { borderColor: isFocused === 'Password' ? Colors.default : theme.input, borderWidth: 1, backgroundColor: isFocused === 'Password' ? '#584CF410' : theme.input }]}>
              <Icon name='lock-closed' size={25} color={isFocused === 'Password' ? Colors.default : Colors.disable}></Icon>
              <TextInput placeholder='Password'
                secureTextEntry={!isPasswordVisible}
                onFocus={() => setIsFocused('Password')}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[{ paddingHorizontal: 10, color: theme.txt, fontFamily: 'Urbanist-Regular', flex: 1 }]}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={isFocused === 'Password' ? Colors.default : Colors.disable} size={20} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 20, paddingLeft: 10, alignItems: 'center', justifyContent: 'center' }}>

              <CheckBox
                value={isSelected}
                onValueChange={() => setIsSelected(!isSelected)}
                tintColors={{ true: Colors.default, false: Colors.default }}
              //  style={{borderColor:Colors.primary}}
              />
              <View>
                <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>Remember me</Text>
              </View>

            </View>

            <View style={{}}>
              <TouchableOpacity
                onPress={handleLogin}
                disabled={isLoading} 
                style={[style.btn, { backgroundColor: isLoading ? Colors.default : Colors.default }]} 
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={style.btntxt}>Sign in</Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
                <Text style={[style.subtxt, { color: Colors.active, fontFamily: 'Urbanist-SemiBold' }]}>Forgot the password?</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:30,marginVertical:50}}>
              <View style={[style.divider,{flex:1,backgroundColor:theme.border}]}></View>
              <Text style={{color:theme.disable2,fontFamily:'Urbanist-Regular',marginHorizontal:10}}>or continue with</Text>
              <View style={[style.divider,{flex:1,backgroundColor:theme.border}]}></View>
        </View> */}


            {/* <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-evenly'}}>
          <TouchableOpacity style={[style.btnoutline,{backgroundColor:theme.borderbg,borderColor:theme.border}]}>
            <Image source={require('../../assets/image/Fb.png')}
            resizeMode='stretch'
            style={{height:height/25,width:width/11}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[style.btnoutline,{backgroundColor:theme.borderbg,borderColor:theme.border}]}>
            <Image source={require('../../assets/image/Google.png')}
            resizeMode='stretch'
            style={{height:height/25,width:width/11}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[style.btnoutline,{backgroundColor:theme.borderbg,borderColor:theme.border}]}>
            <Image source={theme.apple}
            resizeMode='stretch'
            style={{height:height/25,width:width/11}}></Image>
          </TouchableOpacity>
        </View> */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 30, marginBottom: 10 }}>
              <Text style={[style.r14, { color: theme.inputtxt }]}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[style.b14, { color: Colors.default, }]}> Sign up</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}