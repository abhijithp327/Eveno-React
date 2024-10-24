import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarStyle: { height:50,marginVertical:30,marginHorizontal:2},
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarShowLabel: true,
                tabBarItemStyle: { marginHorizontal: -10 },
                tabBarIndicatorStyle: { backgroundColor: Colors.default },
                swipeEnabled: false,

            }}>
            <Tab.Screen name="Economy" component={Event}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Economy</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="VIP" component={Event}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>VIP</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

const Event = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [seatCount, setSeatCount] = useState(1);

    const increaseSeatCount = () => {
        setSeatCount(seatCount + 1)
    }
    const decreaseSeatCount = () => {
        if (seatCount > 1) {
            setSeatCount(seatCount - 1)
        }
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <Text style={[style.subtitle, { color: theme.txt, marginTop: 20 }]}>Choose number of seats</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={decreaseSeatCount}
                    style={{ width: width / 9, height: height / 22, borderColor: theme.border, backgroundColor: theme.borderbg, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}
                >
                    <Text style={[style.title, { color: Colors.default, marginTop: -4 }]}>-</Text>
                </TouchableOpacity>
                <Text style={[style.title, { color: theme.txt, marginHorizontal: 30 }]}>{seatCount}</Text>
                <TouchableOpacity
                    onPress={increaseSeatCount}
                    style={{ width: width / 9, height: height / 22, borderColor: theme.border, backgroundColor: theme.borderbg, borderWidth: 1, borderRadius: 10, alignItems: 'center' }}
                >
                    <Text style={[style.title, { color: Colors.default, marginTop: -4 }]}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('BookEvent2')}
                    style={style.btn}>
                    <Text style={style.btntxt}>Continue - ${seatCount * 50.00}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default function BookEvent() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Book Event'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}