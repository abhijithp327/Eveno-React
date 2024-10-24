import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import StatusBadge from '../components/StatusBadge';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ManageExhibition = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (

        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20 }]}>

                {/* Modified Header Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingHorizontal: 10,
                    marginBottom: 10
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BottomNavigator')}
                        style={{ paddingRight: 8 }}
                    >
                        <IonIcon name="arrow-back" color={theme.txt} size={28} />
                    </TouchableOpacity>
                    <Text style={[style.apptitle, {
                        color: theme.txt,
                        marginLeft: 4
                    }]}>Validate Ticket</Text>
                </View>

                {/* Search Bar */}
                <View style={{
                    marginTop: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 15,
                    borderRadius: 40,
                    paddingHorizontal: 10,
                    height: 50,
                    borderColor: Colors.secondary2,
                    padding: 10
                }}>
                    <Icon name="search" size={16} color={Colors.disable} style={{ paddingHorizontal: 10, }} />
                    <TextInput
                        style={{
                            flex: 1,
                            color: Colors.active,
                            fontSize: 16,
                            paddingVertical: 0,
                            height: '100%',
                            textAlignVertical: 'center',
                        }}
                        placeholder="Search"
                        placeholderTextColor={Colors.disable}
                    />
                </View>

                <ScrollView>
                    <View style={{ marginBottom: 20, marginTop: 15 }}>

                        {/* Event 1 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m15.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="approved" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 2 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m16.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="rejected" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 3 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m17.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="pending" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 4 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m18.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="approved" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 5 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m19.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="pending" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 6 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m16.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="rejected" />
                            </View>
                        </TouchableOpacity>


                        {/* Event 4 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m18.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="approved" />
                            </View>
                        </TouchableOpacity>

                        {/* Event 7 */}
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 15,
                            borderRadius: 10,
                            borderColor: Colors.secondary2,
                            borderWidth: 1,
                            marginBottom: 15,
                            backgroundColor: theme.bg
                        }}>
                            <Image source={require('../../assets/image/m19.png')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.disable }}>Today, 24 June 2024</Text>
                                <Text style={{ color: Colors.active }}>Event Name</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                                <StatusBadge status="pending" />
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>




            </View>
        </SafeAreaView >
    )
}

export default ManageExhibition