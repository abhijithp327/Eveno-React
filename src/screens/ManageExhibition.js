import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator } from '@react-native-material/core';
import { useDispatch } from 'react-redux';
import { getAllExhibitorEvents } from '../redux/features/eventSlice';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const PER_PAGE = 10;

const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'approved':
                return {
                    backgroundColor: '#E8F5E9',
                    textColor: '#2E7D32'
                };
            case 'rejected':
                return {
                    backgroundColor: '#FFEBEE',
                    textColor: '#C62828'
                };
            default:
                return {
                    backgroundColor: '#FFF3E0',
                    textColor: '#EF6C00'
                };
        }
    };

    const statusColors = getStatusColor();

    return (
        <View style={[styles.badge, { backgroundColor: statusColors.backgroundColor }]}>
            <Text style={[styles.statusText, { color: statusColors.textColor }]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
        </View>
    );
};

const ManageExhibition = () => {
    const dispatch = useDispatch();
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);

    const fetchEvents = async (pageNumber = 1, shouldRefresh = false) => {
        try {
            if (pageNumber === 1) {
                setLoading(true);
            } else {
                setLoadingMore(true);
            }

            const response = await dispatch(getAllExhibitorEvents({
                perPage: PER_PAGE,
                page: pageNumber,
                searchQuery
            }));

            if (response.payload) {
                const newEvents = response.payload || [];
                if (shouldRefresh || pageNumber === 1) {
                    setAllEvents(newEvents);
                } else {
                    const existingEventIds = new Set(allEvents.map(event => event.event_id));
                    const uniqueNewEvents = newEvents.filter(event => !existingEventIds.has(event.event_id));
                    setAllEvents(prev => [...prev, ...uniqueNewEvents]);
                }
                setHasMore(newEvents.length === PER_PAGE);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchEvents(1);
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        const timeoutId = setTimeout(() => {
            setPage(1);
            fetchEvents(1, true);
        }, 500);

        setSearchTimeout(timeoutId);
    };

    const handleLoadMore = () => {
        if (!loadingMore && hasMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchEvents(nextPage);
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setPage(1);
        fetchEvents(1, true);
    };

    const getStatusFromEvent = (event) => {
        if (event.is_approved === true) return "approved";
        if (event.is_approved === false) return "rejected";
        return "pending";
    };

    const formatEventDate = (date) => {
        const eventDate = new Date(date);
        return eventDate.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const renderEventCard = (event, index) => {
        const uniqueKey = `event-${event.event_id}-${index}`;
        const isApproved = event.is_approved === true;

        const CardContent = () => (
            <View style={[styles.cardContainer, {
                backgroundColor: theme.bg
            }]}>
                <Image
                    source={require('../../assets/image/m18.png')}
                    style={styles.cardImage}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.eventTitle} numberOfLines={2}>
                        {event.event_title}
                    </Text>
                    <Text style={styles.dateText} numberOfLines={1}>
                        {formatEventDate(new Date())}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <StatusBadge status={getStatusFromEvent(event)} />
                </View>
            </View>
        );

        return isApproved ? (
            <TouchableOpacity
                key={uniqueKey}
                onPress={() => navigation.navigate('LeadDetails', { eventData: event })}
                activeOpacity={0.7}
            >
                <CardContent />
            </TouchableOpacity>
        ) : (
            <View key={uniqueKey}>
                <CardContent />
            </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20 }]}>
                {/* Header Section */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BottomNavigator')}
                        style={styles.backButton}
                    >
                        <IonIcon name="arrow-back" color={theme.txt} size={28} />
                    </TouchableOpacity>
                    <Text style={[style.apptitle, {
                        color: theme.txt,
                        marginLeft: 4
                    }]}>Scan Event</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Icon name="search" size={16} color={Colors.disable} style={styles.searchIcon} />
                    <TextInput
                        style={[styles.searchInput, { color: Colors.active }]}
                        placeholder="Search"
                        placeholderTextColor={Colors.disable}
                        value={searchQuery}
                        onChangeText={handleSearch}
                    />
                </View>

                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={Colors.default} />
                        <Text style={[style.b16, { color: theme.txt }]}>Loading Events...</Text>
                    </View>
                ) : (
                    <ScrollView
                        onScroll={({ nativeEvent }) => {
                            const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
                            if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
                                handleLoadMore();
                            }
                        }}
                        scrollEventThrottle={400}
                    >
                        <View style={styles.eventsContainer}>
                            {allEvents.length === 0 ? (
                                <Text style={[style.b16, styles.noEventsText, { color: theme.txt }]}>
                                    {searchQuery ? 'No events found matching your search' : 'No events available'}
                                </Text>
                            ) : (
                                allEvents.map((event, index) => renderEventCard(event, index))
                            )}
                            {loadingMore && (
                                <View style={styles.loadMoreContainer}>
                                    <ActivityIndicator size="small" color={Colors.default} />
                                </View>
                            )}
                        </View>
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    backButton: {
        paddingRight: 8
    },
    searchContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 40,
        paddingHorizontal: 10,
        height: 50,
        borderColor: Colors.secondary2,
        padding: 10
    },
    searchIcon: {
        paddingHorizontal: 10
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        fontFamily: 'Urbanist-Regular',
        height: '100%',
        textAlignVertical: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventsContainer: {
        marginBottom: 20,
        marginTop: 15
    },
    noEventsText: {
        textAlign: 'center',
        marginTop: 20
    },
    loadMoreContainer: {
        paddingVertical: 20
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        borderColor: Colors.secondary2,
        borderWidth: 1,
        marginBottom: 15,
        minHeight: 90,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    eventTitle: {
        color: Colors.active,
        fontSize: 15,
        fontFamily: 'Urbanist-Bold',
        marginBottom: 4,
        flexWrap: 'wrap'
    },
    dateText: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
        flexShrink: 1,
    },
    contentContainer: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 5
    },
    rightContainer: {
        marginLeft: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 2
    },
    qrIconContainer: {
        marginTop: 8,
        backgroundColor: Colors.default,
        borderRadius: 20,
        padding: 6
    },
    // New styles for StatusBadge
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'Urbanist-Bold',
        textTransform: 'capitalize',
        letterSpacing: 0.2,
    }
});

export default ManageExhibition;