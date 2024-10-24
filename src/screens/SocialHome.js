import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useContext,} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/socialColors'
import style from '../theme/socialStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, RadioButton } from 'react-native-paper';
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home2 from './SocialHome2';
import Invite from './Invite';
import Home1 from './SocialHome1';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Tab = createMaterialTopTabNavigator();

const Top=()=>{
    
return(
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {backgroundColor: '#fff', paddingTop:10,},
        tabBarShowLabel:true,
        // tabBarItemStyle:{},
        swipeEnabled:false,
        tabBarScrollEnabled:true,
        tabBarIndicatorStyle:{backgroundColor:Colors.primary},
        tabBarPressOpacity:0.2,
        tabBarPressColor:Colors.bg,         
      
      }}>
        <Tab.Screen name="Popular" component={Popular}
        options={{
            tabBarShowLabel:true,
            tabBarLabel: ({focused, color,}) => (
                <View style={{
                
                }}>
            <Text style={[style.subtitle,{color: focused ? Colors.primary : Colors.disable,textAlign:'center'}]}>Popular</Text>
            </View>
            ),
            headerShown:false,
        }} />
        <Tab.Screen name="Latest" component={Home2}
        options={{
          tabBarShowLabel:true,
          tabBarLabel: ({focused, color,}) => (
            <View style={{
              
            }}>
            <Text style={[style.subtitle,{color: focused ? Colors.primary : Colors.disable,textAlign:'center',}]}>Latest</Text>
            </View>
            ),
            headerShown:false,
        }} />
        <Tab.Screen name="Friends" component={Invite} 
        options={{
          tabBarShowLabel:true,
          tabBarLabel: ({focused, color,}) => (
            <View style={{
              
            }}>
            <Text style={[style.subtitle,{color: focused ? Colors.primary : Colors.disable,textAlign:'center',}]}>Friends</Text>
            </View>
            ),
            headerShown:false,
        }} />

        <Tab.Screen name="Discover" component={Home1} 
        options={{
          tabBarShowLabel:true,
          tabBarLabel: ({focused, color,}) => (
            <View style={{
              
            }}>
            <Text style={[style.subtitle,{color: focused ? Colors.primary : Colors.disable,textAlign:'center',}]}>Discover</Text>
            </View>
            ),
            headerShown:false,
        }} />

        <Tab.Screen name="Stories" component={Stories} 
        options={{
          tabBarShowLabel:true,
          tabBarLabel: ({focused, color,}) => (
            <View style={{
              
            }}>
            <Text style={[style.subtitle,{color: focused ? Colors.primary : Colors.disable,textAlign:'center',}]}>Stories</Text>
            </View>
            ),
            headerShown:false,
        }} />
       
    </Tab.Navigator>
)
}

const Popular =()=>{
    const navigation = useNavigation();
    return(
        <SafeAreaView style={[style.area, { backgroundColor: '#fff', }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height*1.65 : height*1.7}}>
            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:'#fff',padding:15}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
                    <ImageBackground source={require('../../assets/image/q7.png')} resizeMode='stretch' style={{height:height/4,marginHorizontal:-15,marginTop:-14}}>
                        <LinearGradient 
                            colors={['#00000001','#00000054']} style={{flex:1}}>
                                <View style={{justifyContent:'flex-end',flex:1,marginBottom:15,marginLeft:15}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <Avatar.Image source={require('../../assets/image/d17.png')} size={45} style={{backgroundColor:'#fff'}}></Avatar.Image>
                                    <View style={{flex:1,marginLeft:10}}>
                                        <Text style={[style.m16,{color:Colors.secondary}]}>Pearl Freeman</Text>
                                        <Text style={[style.r12,{color:Colors.secondary,marginTop:2}]}>2 hours ago</Text>
                                    </View>
                                    
                                </View>
                                </View>
                        </LinearGradient>
                    </ImageBackground>
                    </TouchableOpacity>
                    <Text style={[style.r12,{color:Colors.bg,marginTop:10}]}>#relax, #travel</Text>
                    <Text style={[style.r14,{color:Colors.bg1,lineHeight:20,marginTop:5}]}>Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire, which is well-known as Shakespeare’s county.</Text>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                        <View style={{flexDirection:'row',flex:0.4,alignItems:'center'}}>
                            <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Comment')} style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',flex:0.4,alignItems:'center'}}>
                            <Icon name='arrow-undo' size={20} color={Colors.lable}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>115</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{padding:5}}>

            <View style={{ flexDirection: 'row', marginTop: 10,}}>
            <View style={{ flex: 1 }}>
                <View style={[style.shadow, { backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 10 }}>
                    <Avatar.Image source={require('../../assets/image/s50.png')} size={30} style={{ backgroundColor: Colors.bg }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m12, { color: Colors.bg1, }]}>Joel Jacobs</Text>
                    <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>2 hours ago</Text>
                    </View>
                </View>
                <ImageBackground source={require('../../assets/image/s51.png')} style={{ height: height / 6,  resizeMode: 'stretch', marginVertical: 15 }} />
                <Text style={[style.m14, { color: Colors.btntxt, paddingHorizontal: 10 }]}>#relax, #travel</Text>
                <Text style={[style.r14, { color: Colors.disable1, marginTop: 3, paddingHorizontal: 10, marginBottom: 10 }]}>Bryce Canyon A Stunning Us Travel Destination</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'space-between', paddingTop: 15, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>1125</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>348</Text>
                    </View>
                </View>
                </View>
                <View style={[style.shadow, { backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12, marginTop: 15, padding: 12 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Avatar.Image source={require('../../assets/image/s52.png')} size={30} style={{ backgroundColor: '#fff' }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m12, { color: Colors.bg1, }]}>Birdie Ball</Text>
                    <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>2 hours ago</Text>
                    </View>
                </View>
                <Text style={[style.m14, { color: Colors.btntxt, marginTop: 10 }]}>#relax, #travel</Text>
                <Text style={[style.r14, { color: Colors.disable1, marginTop: 5, marginBottom: 10 }]}>If you’re planning a stag do in Birmingham, you’d almost have to include some sporting activities. After all, Sport England has awarded Birmingham the title National City of Sport. Situated just west of the center of England, In addition to giving him (and the rest of your lot) a chance to pad your pockets before a night out with the lovely strippers</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>1125</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>348</Text>
                    </View>
                </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 7 }}></View>
            <View style={{ flex: 1 }}>
                <View style={[style.shadow, { backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12, padding: 12 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Avatar.Image source={require('../../assets/image/s53.png')} size={30} style={{ backgroundColor: '#fff' }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m12, { color: Colors.bg, }]}>Daisy Perry</Text>
                    <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>2 hours ago</Text>
                    </View>
                </View>
                <Text style={[style.m14, { color: Colors.btntxt, marginTop: 10 }]}>#relax, #travel</Text>
                <Text style={[style.r14, { color: Colors.disable1, marginTop: 5, marginBottom: 10 }]}>For travellers searching for top of the line accommodation, try the Four Seasons Las Vegas.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>1125</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>348</Text>
                    </View>
                </View>
                </View>
                <View style={[style.shadow, { backgroundColor: '#fff', shadowColor: Colors.active, borderRadius: 12, padding: 12, marginTop: 15 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Avatar.Image source={require('../../assets/image/s54.png')} size={30} style={{ backgroundColor: '#fff' }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m12, { color: Colors.bg, }]}>Charlie Parsons</Text>
                    <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>2 hours ago</Text>
                    </View>
                </View>
                <ImageBackground source={require('../../assets/image/s55.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 3, marginTop: 15, justifyContent: 'center', alignItems: 'center' }} >
                    <Avatar.Image source={require('../../assets/image/s56.png')} size={40} style={{ backgroundColor: 'transparent' }} />
                </ImageBackground>
                <Text style={[style.m14, { color: Colors.btntxt, marginTop: 10 }]}>#relax, #travel</Text>
                <Text style={[style.r14, { color: Colors.disable1, marginTop: 5, marginBottom: 10 }]}>The 6 Step Non Surgical Facial Rejuvenation Program</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>1125</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                    <Text style={[style.r14, { marginLeft: 5 }]}>348</Text>
                    </View>
                </View>
                </View>
            </View>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const Stories =()=>{
    return(
        <SafeAreaView style={[style.area, { backgroundColor: '#fff', }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height*1.75 : height*1.65}}>
            <View style={{padding:5,marginTop:10}}>
                <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:'#fff',padding:15}]}>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Avatar.Image source={require('../../assets/image/d13.png')} size={45} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={[style.m16]}>Christina Kennedy</Text>
                            <Text style={[style.r12,{color:Colors.disable,marginTop:2}]}>2 hours ago</Text>
                        </View>
                        <Icon name='ellipsis-horizontal' size={20} color={Colors.disable}></Icon>
                    </View>
                    <Text style={[style.r14,{color:Colors.disable1,lineHeight:20,marginTop:10}]}>If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.</Text>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                        <View style={{flexDirection:'row',flex:0.4}}>
                            <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <Image source={require('../../assets/image/d6.png')} resizeMode='stretch' style={{height:height/25,width:width/5}}></Image>
                    </View>
                </View>
            </View>

            <Text style={[style.apptitle,{marginTop:5}]}>Events</Text>

            <View style={{marginTop:20}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <ImageBackground source={require('../../assets/image/q8.png')} resizeMode='stretch' style={{height:height/5,width:width/2.2}}>
                            <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 10 }}>
                                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F78361', '#F54B64',]}
                                    style={{ flexDirection: 'row', alignItems: 'center', height: height / 42, width: width / 6, borderRadius: 15, justifyContent: 'center', }} >
                                    <Icons name="video" color={Colors.secondary} size={16} />
                                    <Text style={[style.r12, { marginLeft: 3 }]}>LIVE</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <Text style={[style.m14,{marginTop:10}]}>LIVE - On the Radio</Text>
                        <Text style={[style.m12,{color:Colors.disable,marginTop:2}]}>10:30 | Freedom Trail</Text>
                    </View>

                    <View style={{margin:10}}></View>

                    <View>
                        <ImageBackground source={require('../../assets/image/q9.png')} resizeMode='stretch' style={{height:height/5,width:width/2.2}}></ImageBackground>
                        <Text style={[style.m14,{marginTop:10}]}>Happy new Year !</Text>
                        <Text style={[style.m12,{color:Colors.disable,marginTop:2}]}>09:00 | Fort Sumter</Text>
                    </View>

                    <View style={{margin:10}}></View>

                    <View>
                        <ImageBackground source={require('../../assets/image/q10.png')} resizeMode='stretch' style={{height:height/5,width:width/2.2}}></ImageBackground>
                        <Text style={[style.m14,{marginTop:10}]}>Google I/O</Text>
                        <Text style={[style.m12,{color:Colors.disable,marginTop:2}]}>05:40 | Washington DC</Text>
                    </View>

                </ScrollView>
            </View>

            <View style={{padding:5,marginVertical:10}}>
                <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:'#fff',padding:15}]}>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Avatar.Image source={require('../../assets/image/s14.png')} size={45} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={[style.m16]}>Christina Kennedy</Text>
                            <Text style={[style.r12,{color:Colors.disable,marginTop:2}]}>2 hours ago</Text>
                        </View>
                        <LinearGradient 
                            colors={[Colors.primary,Colors.primary1]} style={{height:height/32,width:width/6.2,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                                <View style={{height:height/34,width:width/6.5,borderRadius:20,backgroundColor:Colors.secondary,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={[style.r12,{color:Colors.bg}]}>Follow</Text>
                                </View>
                        </LinearGradient>
                    </View>
                    <Text style={[style.r12,{color:Colors.primary1,marginTop:10}]}>#relax, #travel</Text>
                    <Text style={[style.r14,{color:Colors.disable1,lineHeight:20,marginTop:5}]}>The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent</Text>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>
                        <Image source={require('../../assets/image/q11.png')} resizeMode='stretch' style={{height:height/8,width:width/3.2,}}></Image>
                        <View>
                            <Image source={require('../../assets/image/q12.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <Image source={require('../../assets/image/q13.png' )} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10}}></Image>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/q14.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <Image source={require('../../assets/image/q15.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10}}></Image>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/q15.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <ImageBackground source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10,}}>
                                <View style={{height:height/18,width:width/7.5,backgroundColor:'#00000070',alignItems:'center',justifyContent:'center'}}>
                                    <Text style={[style.r14, { color: Colors.secondary }]}>+23</Text>
                                </View>
                                
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                        <View style={{flexDirection:'row',flex:0.4}}>
                            <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <Image source={require('../../assets/image/d6.png')} resizeMode='stretch' style={{height:height/25,width:width/5}}></Image>
                    </View>
                </View>
            </View>

            <View style={{padding:5,marginVertical:10}}>
                <View style={[style.shadow,{shadowColor:Colors.active,backgroundColor:'#fff',padding:15}]}>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Avatar.Image source={require('../../assets/image/d18.png')} size={45} style={{backgroundColor:Colors.bg}}></Avatar.Image>
                        <View style={{flex:1,marginLeft:10}}>
                            <Text style={[style.m16]}>Gerald Thomas</Text>
                            <Text style={[style.r12,{color:Colors.disable,marginTop:2}]}>2 hours ago</Text>
                        </View>
                        <LinearGradient 
                            colors={[Colors.primary,Colors.primary1]} style={{height:height/32,width:width/6.2,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                                <View style={{height:height/34,width:width/6.5,borderRadius:20,backgroundColor:Colors.secondary,alignItems:'center',justifyContent:'center'}}>
                                <Text style={[style.r12,{color:Colors.bg}]}>Follow</Text>
                                </View>
                        </LinearGradient>
                    </View>
                    <Text style={[style.r14,{color:Colors.disable1,lineHeight:20,marginTop:10}]}>Stu Unger is one of the biggest superstars to have immerged from the professional poker world. Besides being a true poker genius and a three time World Series of Poker champion</Text>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>
                        <Image source={require('../../assets/image/q11.png')} resizeMode='stretch' style={{height:height/8,width:width/3.2,}}></Image>
                        <View>
                            <Image source={require('../../assets/image/q12.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <Image source={require('../../assets/image/q13.png' )} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10}}></Image>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/q14.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <Image source={require('../../assets/image/q15.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10}}></Image>
                        </View>
                        <View>
                            <Image source={require('../../assets/image/q15.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,}}></Image>
                            <ImageBackground source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{height:height/18,width:width/7.5,marginTop:10,}}>
                                <View style={{height:height/18,width:width/7.5,backgroundColor:'#00000070',alignItems:'center',justifyContent:'center'}}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>+23</Text>
                                </View>
                                
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                        <View style={{flexDirection:'row',flex:0.4}}>
                            <Icon name='heart' size={20} color={Colors.primary1}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Icon name='chatbubble-ellipses' size={20} color={Colors.lable}></Icon>
                            <Text style={[style.r14,{marginLeft:5}]}>1125</Text>
                        </View>
                        <Image source={require('../../assets/image/d6.png')} resizeMode='stretch' style={{height:height/25,width:width/5}}></Image>
                    </View>
                </View>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default function SocialHome() {
    
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: '#fff' }]}>
        
    <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
    <View style={[style.main, { marginTop:Platform.OS === 'ios' ? 0 : 20 }]}>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:30,}}>
            <View style={[style.txtinput,{flex:1,backgroundColor:Colors.search,marginLeft:0,height:40,flexDirection:'row',alignItems:'center'}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon name='search' size={20} color={Colors.disable}></Icon>
            </TouchableOpacity>
            <TextInput placeholder='Search'
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.r14,{color:Colors.secondary,marginLeft:5}]}
            ></TextInput>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Live')}>
                <LinearGradient 
                    colors={[Colors.primary,Colors.primary1]} style={{height:40,width:40,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Icon name='camera' size={25} color={Colors.secondary}></Icon>
                </LinearGradient>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q1.png')} resizeMode='stretch' style={{height:height/14,width:width/6.4}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Thomas</Text>
                </View>
                <View style={{margin:8}}></View>
                <TouchableOpacity onPress={() => navigation.navigate('LB2')} style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q6.png')} resizeMode='stretch' style={{height:height/13.9,width:width/6.8}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Mike West</Text>
                </TouchableOpacity>
                <View style={{margin:8}}></View>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q2.png')} resizeMode='stretch' style={{height:height/14,width:width/6.4}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Kevin Doyle</Text>
                </View>
                <View style={{margin:8}}></View>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q3.png')} resizeMode='stretch' style={{height:height/14,width:width/6.4}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Victor Black</Text>
                </View>
                <View style={{margin:5}}></View>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q4.png')} resizeMode='stretch' style={{height:height/14,width:width/6.4}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Mildred Miles</Text>
                </View>
                <View style={{margin:5}}></View>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/image/q5.png')} resizeMode='stretch' style={{height:height/14,width:width/6.4}}></Image>
                    <Text style={[style.r10,{textAlign:'center',marginTop:5}]}>Jane Barber</Text>
                </View>
                
            </ScrollView>
        </View>
        <Top></Top>

    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}