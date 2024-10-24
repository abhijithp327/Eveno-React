import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, } from 'react-native'
import React, { useState, useContext } from 'react'
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

export default function Invited() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)
    const [T7, setT7] = useState(false)
    const [T8, setT8] = useState(false)
    const [T9, setT9] = useState(false)
    const [T10, setT10] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Invite Friends'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s1.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Lauralee Quintero</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-300-555-0135</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT1(!T1)}
                                style={T1 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T1 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s2.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Annabel Rohan</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-202-555-0136</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT2(!T2)}
                                style={T2 ? style.follow : [style.following, { backgroundColor: theme.bg }]}>
                                {T2 ?
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s3.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Alfonzo Schuessler</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-300-555-0119</Text>
                        </View>                        
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT3(!T3)}
                                style={T3 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T3 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s4.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Augustina Midgett</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-300-555-0161</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT4(!T4)}
                                style={T4 ? style.follow : [style.following, { backgroundColor: theme.bg }]}>
                                {T4 ?
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s5.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Freida Varnes</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-300-555-0136</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT5(!T5)}
                                style={T5 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T5 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s6.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Francene Vandyne</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-202-555-0167</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT6(!T6)}
                                style={T6 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T6 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s7.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Geoffrey Mott</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-202-555-0119</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT7(!T7)}
                                style={T7 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T7 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s8.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Rayford Chenail</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-202-555-0171</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT8(!T8)}
                                style={T8 ? style.follow : [style.following, { backgroundColor: theme.bg }]}>
                                {T8 ?
                                    <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s9.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Florencio Dorrance</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-300-555-0171</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT9(!T9)}
                                style={T9 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T9 ?
                                     <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                     <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/s10.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Kylee Danford</Text>
                            <Text style={[style.b14, { color: theme.disable2, marginTop: 5 }]}>+1-202-555-0167</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT10(!T10)}
                                style={T10 ? [style.following, { backgroundColor: theme.bg }] : style.follow}>
                                {T10 ?
                                     <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                     <Text style={[style.b14, { color: Colors.secondary }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}