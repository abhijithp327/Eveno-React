import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, AppBar, } from '@react-native-material/core';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import RBSheet from 'react-native-raw-bottom-sheet';
import { color } from 'react-native-elements/dist/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTickets } from '../redux/features/eventSlice';
import appConfig from '../config/appConfig';

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
            <Tab.Screen name="Upcoming" component={Upcoming}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Upcoming</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Completed" component={Completed}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Completed</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Cancelled" component={Cancelled}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.default : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center', fontSize: 16 }}>Cancelled</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

const Upcoming = () => {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.event.userTickets);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true);
                await dispatch(getUserTickets({ is_canceled: false, past_order: false }));
            } catch (error) {
                console.error("Failed to fetch tickets", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, [dispatch]);

    const upcomingTickets = tickets?.filter(ticket => !ticket.is_canceled && !ticket.past_order) || [];

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        return `${appConfig.server.imageBaseUrl}${imagePath}`;
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return {
            date: date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            time: date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
    };

    // Loading state
    if (loading) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={Colors.default} />
                </View>
            </SafeAreaView>
        );
    }


    if (!upcomingTickets.length) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <FontIcon name="ticket" size={50} color={Colors.default} style={{ marginBottom: 15 }} />
                    <Text style={[style.b18, { color: theme.txt, textAlign: 'center', marginBottom: 10 }]}>
                        No Upcoming Tickets
                    </Text>
                    <Text style={[style.r14, { color: theme.disable2, textAlign: 'center' }]}>
                        You don't have any upcoming event tickets!
                    </Text>

                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, paddingBottom: 70 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {upcomingTickets.map((ticket, index) => {
                    const { date, time } = formatDateTime(ticket.event_start_datetime || ticket.performance_startdatetime);
                    const imageUrl = getImageUrl(ticket.event_image);

                    return (
                        <View key={ticket.id || index} style={{ padding: 5, marginTop: index > 0 ? 10 : 0 }}>
                            <View style={[style.shadow, { backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: imageUrl }}
                                        resizeMode='cover'
                                        defaultSource={require('../../assets/image/m18.png')}
                                        style={{ height: height / 8.5, width: width / 3.6, borderRadius: 10 }}
                                    />
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text style={[style.b18, { color: theme.txt }]} numberOfLines={2}>
                                            {ticket.event_title || ticket.event_name}
                                        </Text>
                                        <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>
                                            {date} • {time}
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                            <FontIcon name='map-marker' size={16} color={Colors.orange} />
                                            <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5 }]} numberOfLines={1}>
                                                {ticket.location || ticket.venue}
                                            </Text>
                                            <View style={{
                                                borderColor: Colors.default,
                                                borderWidth: 1,
                                                paddingHorizontal: 10,
                                                paddingVertical: 4,
                                                borderRadius: 10
                                            }}>
                                                <Text style={[style.r10, { color: Colors.orange }]}>Paid</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]} />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (this.RBSheet6) {
                                                this.RBSheet6.open();
                                            }
                                        }}
                                        style={[
                                            style.btn,
                                            {
                                                flex: 1,
                                                backgroundColor: theme.borderbg,
                                                paddingVertical: 8,
                                                borderColor: Colors.default,
                                                borderWidth: 1
                                            }
                                        ]}
                                    >
                                        <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>
                                            Cancel Booking
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={{ margin: 5 }} />
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('ETicket', {
                                            orderId: ticket.id,
                                        })}
                                        style={[style.btn, { flex: 1, paddingVertical: 8 }]}
                                    >
                                        <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};


const Completed = () => {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [loading, setLoading] = useState(false);

    const tickets = useSelector((state) => state.event.userTickets);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true);
                await dispatch(getUserTickets({ is_canceled: false, past_order: true }));
            } catch (error) {
                console.error("Failed to fetch tickets", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    const formatDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        return {
            date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
    };

    const getImageUrl = (imageName) => {
        if (!imageName || imageName === 'null') return require('../../assets/image/m18.png');
        return { uri: `${appConfig.server.imageBaseUrl}${imageName}` };
    };

    // Loading state
    if (loading) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: theme.bg, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={Colors.default} />
                </View>
            </SafeAreaView>
        );
    }

    // Empty state
    if (!tickets.length) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: theme.bg, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Icon name="ticket" size={50} color={Colors.default} style={{ marginBottom: 15 }} />
                    <Text style={[style.b18, { color: theme.txt, textAlign: 'center', marginBottom: 10 }]}>
                        No Completed Events
                    </Text>
                    <Text style={[style.r14, { color: theme.disable2, textAlign: 'center' }]}>
                        You haven't attended any events yet. Check out your upcoming events!
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {tickets.map((ticket) => {
                    const { date, time } = formatDateTime(ticket.event_start_datetime);

                    return (
                        <View key={ticket.id} style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={getImageUrl(ticket.event_image)}
                                        resizeMode='cover'
                                        defaultSource={require('../../assets/image/m18.png')}
                                        style={{ height: height / 8.5, width: width / 3.6, borderRadius: 10 }}
                                    />
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text style={[style.b18, { color: theme.txt }]} numberOfLines={2}>
                                            {ticket.event_title}
                                        </Text>
                                        <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>
                                            {date} • {time}
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                            <Icon name='location' size={20} color={Colors.orange} />
                                            <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5 }]} numberOfLines={1}>
                                                {ticket.location}
                                            </Text>
                                            <View style={{
                                                borderColor: '#07BD74',
                                                borderWidth: 1,
                                                paddingHorizontal: 7,
                                                paddingBottom: 6,
                                                borderRadius: 10,
                                                paddingTop: 4
                                            }}>
                                                <Text style={[style.r10, { color: '#07BD74' }]}>Completed</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]} />
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (this.RBSheet5) {
                                                this.RBSheet5.open();
                                            }
                                        }}
                                        style={[
                                            style.btn,
                                            {
                                                flex: 1,
                                                backgroundColor: theme.borderbg,
                                                paddingVertical: 8,
                                                borderColor: Colors.default,
                                                borderWidth: 1
                                            }
                                        ]}
                                    >
                                        <Text style={[style.btntxt, { color: Colors.default, fontSize: 14 }]}>
                                            Leave a Review
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={{ margin: 5 }} />
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('ETicket', { ticketId: ticket.id })}
                                        style={[style.btn, { flex: 1, paddingVertical: 8 }]}
                                    >
                                        <Text style={[style.btntxt, { fontSize: 14 }]}>View E-Ticket</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const Cancelled = () => {

    const theme = useContext(themeContext);

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const tickets = useSelector((state) => state.event.userTickets);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true);
                await dispatch(getUserTickets({ is_canceled: false, past_order: false }));
            } catch (error) {
                console.error("Failed to fetch tickets", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTickets();
    }, []);

    const formatDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        return {
            date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
    };

    const getImageUrl = (imageName) => {
        if (!imageName || imageName === 'null') return require('../../assets/image/m18.png');
        return { uri: `${appConfig.server.imageBaseUrl}${imageName}` };
    };

    // Loading state
    if (loading) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: theme.bg, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={Colors.default} />
                </View>
            </SafeAreaView>
        );
    }

    // Empty state
    if (!tickets.length) {
        return (
            <SafeAreaView style={[style.area, { backgroundColor: theme.bg, flex: 1 }]}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Icon name="ticket" size={50} color={Colors.default} style={{ marginBottom: 15 }} />
                    <Text style={[style.b18, { color: theme.txt, textAlign: 'center', marginBottom: 10 }]}>
                        No Cancelled Tickets
                    </Text>
                    <Text style={[style.r14, { color: theme.disable2, textAlign: 'center' }]}>
                        You don't have any cancelled tickets!
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {tickets.map((ticket) => {
                    const { date, time } = formatDateTime(ticket.event_start_datetime);

                    return (
                        <View key={ticket.id} style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                                <Image
                                    source={getImageUrl(ticket.event_image)}
                                    resizeMode='cover'
                                    defaultSource={require('../../assets/image/m18.png')}
                                    style={{ height: height / 8.5, width: width / 3.6, borderRadius: 10 }}
                                />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]} numberOfLines={2}>
                                        {ticket.event_title}
                                    </Text>
                                    <Text style={[style.r12, { color: Colors.orange, marginTop: 8 }]}>
                                        {date} • {time}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                        <Icon name='location' size={20} color={Colors.orange} />
                                        <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 5 }]} numberOfLines={1}>
                                            {ticket.location}
                                        </Text>
                                        <View style={{
                                            borderColor: Colors.default,
                                            borderWidth: 1,
                                            paddingHorizontal: 7,
                                            paddingBottom: 6,
                                            borderRadius: 10,
                                            paddingTop: 4
                                        }}>
                                            <Text style={[style.r10, { color: Colors.default }]}>Cancelled</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};


export default function TicketTab() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>

                    <View >
                        <Avatar source={require('../../assets/image/Logo2.png')}
                            size={40}></Avatar>
                    </View>

                    <Text style={[style.apptitle, { color: theme.txt, flex: 1, marginLeft: 2 }]}>Tickets</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Messagedelete')}>
                            <Icon name='search' size={30} color={theme.txt}></Icon>
                        </TouchableOpacity>

                        <View style={{ margin: 10 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('MessageN')}>
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={30} />
                        </TouchableOpacity>

                    </View>

                </View>

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}