import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import themeContext from '../../theme/themeContex';
import { getUserTickets } from '../../redux/features/eventSlice';
import appConfig from '../../config/appConfig';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from '@react-native-material/core';



const Completed = () => {

    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const [loading, setLoading] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const tickets = useSelector((state) => state.event.userTickets);



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

    // Initial load effect
    useEffect(() => {
        if (isInitialLoad) {
            fetchTickets();
            setIsInitialLoad(false);
        }
    }, [isInitialLoad]);

    // Focus effect
    useEffect(() => {
        if (isFocused && !isInitialLoad) {
            fetchTickets();
        }
    }, [isFocused]);

    const formatDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        return {
            date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
    };

    const getImageUrl = (imageName) => {
        if (!imageName || imageName === 'null') return require('../../../assets/image/m18.png');
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
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10, paddingBottom: 70 }]}>
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
                                        defaultSource={require('../../../assets/image/m18.png')}
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



export default Completed;