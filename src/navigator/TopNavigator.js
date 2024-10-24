import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal ,SafeAreaView} from 'react-native'
import React, { useContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { VStack } from '@react-native-material/core';
import Ionicons from "react-native-vector-icons/Ionicons"
import themeContext from '../theme/themeContex';
import All from '../screens/All';
import ResultCard from '../screens/ResultCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState('false')
  const navigation = useNavigation();


  const Musiclist = () =>{
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
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,}]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,alignItems:'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>978 founds</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setselect(!select)}>
                            <Icon name='md-reader' size={22} color={select ? Colors.default : theme.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setisSelect(!isSelect)}
                            style={{ marginLeft: 10 }}>
                            <Icon name={isSelect ? 'grid' : 'grid-outline'} size={22} color={isSelect ? Colors.default : theme.disable} />
                        </TouchableOpacity>

                    </View>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ padding: 5 ,marginTop:10}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m2.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>International Concert</Text>
                                <Text style={[style.r12, { color: Colors.default, marginTop: 8 }]}>Sun, Dec 23 • 19.00 - 23.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>
                                    <TouchableOpacity onPress={() => setL1(!L1)}>
                                        <Icon name={L1 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m3.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>Jazz Music Festival</Text>
                                <Text style={[style.r12, { color: Colors.default, marginTop: 8 }]}>Tue, Dec 16 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Washing...</Text>
                                    <TouchableOpacity onPress={() => setL2(!L2)}>
                                        <Icon name={L2 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m4.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>DJ Music Competition</Text>
                                <Text style={[style.r12, { color: Colors.default, marginTop: 8 }]}>Thu, Dec 20 • 17.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Hall, California</Text>
                                    <TouchableOpacity onPress={() => setL3(!L3)}>
                                        <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 ,marginBottom:20}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m5.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>National Music Fest</Text>
                                <Text style={[style.r12, { color: Colors.default, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.default}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Chicago</Text>
                                    <TouchableOpacity onPress={() => setL4(!L4)}>
                                        <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.default}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
        </SafeAreaView>    
    )
}


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { flexDirection: 'row', },
        tabBarLabelStyle: {
          fontSize: 15,
          backgroundColor: Colors.disable,
          borderRadius: 20,
          // paddingHorizontal:10,
          paddingVertical: 8,
          marginHorizontal: -60
        },
        tabBarShowLabel: true,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: Colors.secondary },
        swipeEnabled:false
      }}>

      <Tab.Screen name="All" component={All}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <View style={{
              borderColor: focused ? Colors.default : Colors.default, borderRadius: 20, borderWidth: 2,
              backgroundColor: focused ? Colors.background : Colors.secondary,
              paddingVertical: 8,
              marginHorizontal: -60
            }}>
              <Text style={{ color: focused ? Colors.default : Colors.default, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>🎨 Art</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen name="Music" component={ResultCard}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <View style={{
              borderColor: focused ? Colors.default : Colors.default, borderRadius: 20, borderWidth: 2,
              backgroundColor: focused ? Colors.background : Colors.secondary,
              paddingVertical: 8,
              marginHorizontal: -60
            }}>
              <Text style={{ color: focused ? Colors.default : Colors.default, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>🎵 Music</Text>
            </View>
          ),
          headerShown: false,
        }} />

      <Tab.Screen name="Art" component={Musiclist}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <View style={{
              borderColor: focused ? Colors.default : Colors.default, borderRadius: 20, borderWidth: 2,
              backgroundColor: focused ? Colors.background : Colors.secondary,
              paddingVertical: 8,
              marginHorizontal: -60
            }}>
              <Text style={{ color: focused ? Colors.default : Colors.default, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>💼 Workshops</Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen name="Workshops" component={All}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <View style={{
              borderColor: focused ? Colors.default : Colors.default, borderRadius: 20, borderWidth: 2,
              backgroundColor: focused ? Colors.background : Colors.secondary,
              paddingVertical: 8,
              marginHorizontal: -60
            }}>
              <Text style={{ color: focused ? Colors.default : Colors.default, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>🎵 Music</Text>
            </View>
          ),
          headerShown: false,
        }} />

      <Tab.Screen name="Others" component={All}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color, }) => (
            <View style={{
              borderColor: focused ? Colors.default : Colors.default, borderRadius: 20, borderWidth: 2,
              backgroundColor: focused ? Colors.background : Colors.secondary,
              paddingVertical: 8,
              marginHorizontal: -60
            }}>
              <Text style={{ color: focused ? Colors.default : Colors.default, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>Others</Text>
            </View>
          ),
          headerShown: false,
        }} />

    </Tab.Navigator>
  )
}

{/* <Tab.Screen name="Music" component={Home} 
options={{
  tabBarItemStyle:{flexDirection:'row',},
  tabBarShowLabel:true,
  tabBarLabel: ({focused, color,}) => (
    <Text style={{color: focused ? Colors.default : Colors.disable,fontFamily:'Urbanist-Regular'}}>🎵 Music</Text>
  ),
  // tabBarIcon:({focused,color}) => {
  //   return <Ionicons name="home-outline" size={25} 
  //   color={focused ? Colors.default : Colors.disable} />
  // },
  headerShown:false,
}}/> */}