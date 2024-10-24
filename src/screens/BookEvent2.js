import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'
import { SafeAreaView } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PhoneInput from 'react-native-phone-number-input';
import CheckBox from '@react-native-community/checkbox';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function BookEvent2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('Select Date');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker();
    };

    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneInput = useRef(null);
    const [isSelected, setIsSelected] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Book Event'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('BookEvent')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />
                    <Text style={[style.r16, { color: theme.txt, marginTop: 20 }]}>Contact Information</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[style.inputContainer, { marginTop: 20, backgroundColor: theme.input, borderColor: theme.border }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Full Name'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={[style.inputContainer, { marginTop: 15, backgroundColor: theme.input, borderColor: theme.border }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Nickname'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={[style.inputContainer, { marginTop: 15, backgroundColor: theme.input, borderColor: theme.border, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Male'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                            <Icon name='caret-down-outline' color={theme.txt} size={20} />
                        </View>
                        <View style={[style.inputContainer, { marginTop: 15, backgroundColor: theme.input, borderColor: theme.border, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                value={selectDate}
                                selectionColor={Colors.primary}
                            />
                            <TouchableOpacity onPress={showDatePicker}  >
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}

                                />
                                <Icons name='calendar-month-outline' color={theme.txt} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={[style.inputContainer, { marginTop: 15, backgroundColor: theme.input, borderColor: theme.border, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Email'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                            <Icons name='email-outline' color={theme.txt} size={20} />
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <PhoneInput
                                selectionColor={Colors.primary}
                                ref={phoneInput}
                                defaultValue={phoneNumber}
                                defaultCode="IN"
                                layout="first"
                                codeTextStyle={{ color: theme.txt }}
                                textInputProps={{ placeholderTextColor: '#9E9E9E' }}
                                textInputStyle={{ color: theme.txt }}
                                containerStyle={{
                                    height: 50,
                                    width: '100%',
                                    borderColor: theme.border,
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
                            />
                        </View>
                        <View style={[style.inputContainer, { marginTop: 15, backgroundColor: theme.input, borderColor: theme.border, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <TextInput style={[style.b14, { color: theme.txt,flex:1 }]}
                                placeholder='State Name'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                            <Icon name='caret-down-outline' color={theme.txt} size={20} />
                        </View>
                        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={() => setIsSelected(!isSelected)}
                                tintColors={{ true: Colors.default, false: Colors.default }}
                                boxType={'square'}
                                onTintColor={Colors.default}
                                onCheckColor={Colors.secondary}
                                onFillColor={Colors.default}
                            />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 5 ,flex:1}]}>I accept the Eveno <Text style={{ color: Colors.default }}>Terms of Service, Community Guidelines,</Text>and <Text style={{ color: Colors.default }}>Privacy Policy </Text>(Required)</Text>
                        </View>

                        <View style={{marginVertical:20}}>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod1')}
                                style={style.btn}>
                                <Text style={style.btntxt}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}