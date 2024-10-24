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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function FList() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);
    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
              
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>44 favorites</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setselect(!select)}>
                            <Icon name='reader' size={22} color={select ? Colors.primary : theme.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setisSelect(!isSelect)}
                            style={{ marginLeft: 10 }}>
                            <Icon name={isSelect ? 'grid' : 'grid-outline'} size={22} color={isSelect ? Colors.primary : theme.disable} />
                        </TouchableOpacity>

                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:height/1.25}}>

                    <View style={{ padding: 5 }}>
                        <View >
                            <TouchableOpacity onPress={() => this.RBSheet2.open()}
                                style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>

                                <RBSheet ref={ref => {
                                    this.RBSheet2 = ref;
                                }}
                                    height={350}
                                    openDuration={100}
                                    customStyles={{
                                        container: {
                                            borderTopRightRadius: 20,
                                            borderTopLeftRadius: 20,
                                            backgroundColor: theme.bg
                                        }
                                    }}>
                                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Remove From Favorites</Text>
                                        <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                        <View style={{ padding: 5 }}>
                                            
                                                <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                                    <Image source={require('../../assets/image/c7.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 4 }} />
                                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                                        <Text style={[style.b18, { color: theme.txt, }]}>Mural Art Festival</Text>
                                                        <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                                            <Icon name='location' size={20} color={Colors.primary}></Icon>
                                                            <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Chicago</Text>
                                                            
                                                        </View>
                                                    </View>
                                                </View>
                                            
                                        </View>

                                        <View style={{marginVertical:20,flexDirection:'row',justifyContent:'space-between'}}>
                                            <View style={{flex:1}}>
                                                <TouchableOpacity onPress={() => this.RBSheet2.close()}
                                                style={[style.btn,{backgroundColor:theme.btn}]}>
                                                    <Text style={[style.btntxt,{color:Colors.primary}]}>Cancel</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{marginHorizontal:10}}></View>
                                            <View style={{flex:1}}>
                                            <TouchableOpacity style={[style.btn,]}>
                                                    <Text style={[style.btntxt,{color:Colors.secondary}]}>Yes, Remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </RBSheet>

                                <Image source={require('../../assets/image/c7.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt, }]}>Mural Art Festival</Text>
                                    <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.primary}></Icon>
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Chicago</Text>
                                        <TouchableOpacity onPress={() => setL1(!L1)}>
                                            <Icon name={L1 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View >
                            <TouchableOpacity onPress={() => this.RBSheet2.open()}
                            style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <Image source={require('../../assets/image/c8.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt, }]}>Speech Competition</Text>
                                    <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Thu, Dec 20 • 17.00 - 22.00 PM</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.primary}></Icon>
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Hall, California</Text>
                                        <TouchableOpacity onPress={() => setL2(!L2)}>
                                            <Icon name={L2 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View>
                            <TouchableOpacity onPress={() => this.RBSheet2.open()}
                            style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <Image source={require('../../assets/image/c9.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt, }]}>Startup Workshops</Text>
                                    <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Sun, Dec 23 • 19.00 - 23.00 PM</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.primary}></Icon>
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>
                                        <TouchableOpacity onPress={() => setL3(!L3)}>
                                            <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View >
                            <TouchableOpacity onPress={() => this.RBSheet2.open()}
                            style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <Image source={require('../../assets/image/c4.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt, }]}>Dance & Music Fest</Text>
                                    <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Tue, Dec 16 • 18.00 - 22.00 PM</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.primary}></Icon>
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Washing...</Text>
                                        <TouchableOpacity onPress={() => setL4(!L4)}>
                                            <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ScrollView>
            
        </SafeAreaView>
    )
}