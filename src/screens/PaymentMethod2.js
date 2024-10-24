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


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PaymentMethod2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Payments'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('NewCard')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<Icons name='line-scan' size={25} color={theme.txt} />}
                />
                <Text style={[style.r16, { color: theme.txt, marginTop: 20 }]}>Select the payment method you want to use.</Text>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.border }]}>
                            <Image source={require('../../assets/image/paypal.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Paypal</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.border }]}>
                            <Image source={require('../../assets/image/google1.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Google pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.border }]}>
                            <Image source={theme.apple}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Apple Pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center' , borderColor: theme.border }]}>
                            <Image source={require('../../assets/image/master.png')}
                                style={{ resizeMode: 'stretch', height: height / 30, width: width / 10.5 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>•••• •••• •••• •••• 4679</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('NewCard')}
                        style={[style.btn, { backgroundColor: theme.btn }]}>
                            <Text style={[style.btntxt, { color: Colors.primary }]}>Add New Card</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewSummary')}
                        style={[style.btn, ]}>
                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}