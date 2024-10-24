import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import { SafeAreaView } from 'react-native'
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewCard() {
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
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Add New Card'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('PaymentMethod1')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        }
                        trailing={<Icons name='line-scan' size={25} color={theme.txt} />}
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 20 }}>
                            <Image source={require('../../assets/image/Card.png')}
                                resizeMode='stretch'
                                style={{ width: width - 40, height: height / 3.5 }} />
                        </View>

                        <Text style={[style.b18, { color: theme.txt }]}>Card Name</Text>
                        <View style={[style.inputContainer, { marginTop: 10, backgroundColor: theme.input, borderColor: theme.border }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Enter Card Name'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                            />
                        </View>

                        <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>Card Number</Text>
                        <View style={[style.inputContainer, { marginTop: 10, backgroundColor: theme.input, borderColor: theme.border }]}>
                            <TextInput style={[style.b14, { color: theme.txt }]}
                                placeholder='Enter Card Number'
                                placeholderTextColor={theme.inputtxt}
                                selectionColor={Colors.primary}
                                keyboardType='numeric'
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{flex:1}}>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>Expiry Date</Text> 
                            <View style={[style.inputContainer,{ backgroundColor: theme.input, marginTop: 10, borderColor: theme.border,flexDirection:'row',justifyContent:'space-between'}]}>
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
                            </View>
                           
                            <View style={{ paddingHorizontal: 10 }}></View>
                            <View style={{flex:1}}>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>CVV</Text>
                            <View style={[style.inputContainer,{ backgroundColor: theme.input, marginTop: 10,  borderColor: theme.border }]}>
                                <TextInput placeholder='CVV'
                                    keyboardType='phone-pad'
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={theme.inputtxt}
                                    style={[ style.b14,{  color: theme.txt,  }]}
                                />
                            </View>
                            </View>
                            
                        </View>

                        <View style={{marginVertical:20}}>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod2')}
                                style={style.btn}>
                                <Text style={style.btntxt}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}