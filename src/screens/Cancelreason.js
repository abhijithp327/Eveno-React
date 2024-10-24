import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView,Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Cancelreason() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}>

                <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                    <AppBar
                        color={theme.bg}
                        title='Cancel Booking'
                        titleStyle={[style.apptitle, { color: theme.txt }]}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('TicketTab')}>
                            <Icon name="arrow-back"
                                // style={{backgroundColor:Colors.secondary,}}  
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.r18, { color: theme.txt, marginTop: 20 }]}>Please select the reason for cancellation:</Text>
                        <View style={[style.divider1, { backgroundColor: theme.border }]}></View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', }}>
                            <RadioButton

                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I have another event, so it collides</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I'm sick, can't come</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I have an urgent need</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="four"
                                status={checked === 'four' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('four')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I have no transportation to come</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="five"
                                status={checked === 'five' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('five')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I have no friends to come</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="six"
                                status={checked === 'six' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('six')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I want to book another event</Text>
                        </View>

                        <View style={{ paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <RadioButton
                                value="seven"
                                status={checked === 'seven' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('seven')}
                                color={Colors.default}
                                uncheckedColor={Colors.default}

                            />
                            <Text style={[style.b18, { color: theme.txt, marginLeft: 5 }]}>I just want to cancel</Text>
                        </View>

                        <Text style={[style.b18, { color: theme.txt, marginTop: 20 }]}>Others</Text>
                        <TextInput placeholder='Other reasons'
                            selectionColor={Colors.default}
                            multiline={true}
                            placeholderTextColor={Colors.disable}
                            style={[style.txtinput, { paddingHorizontal: 15, color: theme.txt, fontFamily: 'Urbanist-Regular', flex: 1, backgroundColor: theme.input, borderColor: theme.input, height: 100, textAlignVertical: 'top', marginVertical: 10 }]}
                        />

                        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => setVisible(true)}
                                style={style.btn}>
                                <Text style={style.btntxt}>Cancel Booking</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true} visible={visible}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 40, borderRadius: 30 ,marginVertical:130}]}>
                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => { setVisible(false) }}>
                                    <Icon name='close' size={20} color={theme.txt} />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../assets/image/congrats1.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, alignSelf: 'center', marginTop: 10 }} />
                            <Text style={[style.apptitle, { color: Colors.default, textAlign: 'center', marginTop: 20 }]}>Successful!!</Text>
                            <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>You have successfully canceled the event. 80% of the funds will be returned to your account.</Text>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity onPress={() => {setVisible(false),navigation.navigate('TicketTab')}}
                                    style={style.btn}>
                                    <Text style={style.btntxt}>OK</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}