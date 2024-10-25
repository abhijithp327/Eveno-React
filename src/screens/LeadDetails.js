import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { getAllExhibitorScannedUsers } from '../redux/features/eventSlice';
import { useDispatch } from 'react-redux';


const PER_PAGE = 10;

const LeadDetails = () => {
    const theme = useContext(themeContext)
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()

    // Local state management
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [scannedUsers, setScannedUsers] = useState([])
    console.log('scannedUsers: ', scannedUsers);
    const [totalCount, setTotalCount] = useState(0)

    // Get the event_id from route params
    const { eventData } = route.params;
    const { event_id } = eventData;
    console.log('event_id: ', event_id);

    // Fetch data on component mount and when search changes
    useEffect(() => {
        if (event_id) {
            fetchScannedUsers(1, true)
        }
    }, [event_id, searchQuery])

    const fetchScannedUsers = async (pageNumber = 1, shouldRefresh = false) => {
        try {
            if (pageNumber === 1) {
                setLoading(true)
            } else {
                setLoadingMore(true)
            }

            const response = await dispatch(getAllExhibitorScannedUsers({
                perPage: PER_PAGE,
                page: pageNumber,
                searchQuery,
                id: event_id
            }))

            console.log('scannedUsers response ', response)

            if (response.payload) {
                const { scannedUsers: newUsers, totalCount: total } = response.payload

                if (shouldRefresh) {
                    setScannedUsers(newUsers)
                    setCurrentPage(1)
                } else {
                    setScannedUsers(prev => [...prev, ...newUsers])
                }

                setTotalCount(parseInt(total || 0))
            }
        } catch (error) {
            console.error('Error fetching scanned users:', error)
        } finally {
            setLoading(false)
            setLoadingMore(false)
        }
    }

    const handleSearch = (text) => {
        setSearchQuery(text)
        // Reset to first page when searching
        setCurrentPage(1)
    }

    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            <Text style={[styles.emptyStateText, { color: theme.txt }]}>
                No visitors found
            </Text>
        </View>
    )

    const renderVisitorItem = (visitor, index, totalItems) => (
        <View key={visitor.id || index}>
            <View style={[styles.visitorCard, { backgroundColor: theme.bg }]}>
                <Text style={[styles.visitorName, { color: theme.txt }]}>
                    {visitor.user_name || 'N/A'}
                </Text>

                <View style={styles.visitorDetails}>
                    <View style={styles.detailRow}>
                        <MaterialIcon name="business" size={16} color={theme.txt} />
                        <Text style={[styles.detailText, { color: theme.txt }]}>
                            {visitor.company || 'N/A'}
                        </Text>
                    </View>

                    <View style={styles.detailRow}>
                        <MaterialIcon name="email" size={16} color={theme.txt} />
                        <Text style={[styles.detailText, { color: theme.txt }]}>
                            {visitor.user_email || 'N/A'}
                        </Text>
                    </View>

                    <View style={styles.detailRow}>
                        <MaterialIcon name="local-activity" size={16} color={theme.txt} />
                        <Text style={[styles.detailText, { color: theme.txt }]}>
                            {visitor.ticket_name || 'N/A'}
                        </Text>
                    </View>

                    <View style={styles.detailRow}>
                        <MaterialIcon name="phone" size={16} color={theme.txt} />
                        <Text style={[styles.detailText, { color: theme.txt }]}>
                            {visitor.user_mobile || 'N/A'}
                        </Text>
                    </View>
                </View>
            </View>

            {index < totalItems - 1 && (
                <View style={styles.divider} />
            )}
        </View>
    )

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input, marginTop: 20 }]}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <IonIcon name="arrow-back" color={theme.txt} size={28} />
                    </TouchableOpacity>
                    <Text style={[style.apptitle, styles.headerTitle, { color: theme.txt }]}>
                        Visitor
                    </Text>
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

                <ScrollView>
                    <View style={styles.contentContainer}>
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.sectionTitle, { color: theme.txt }]}>
                                Detailed information
                            </Text>
                        </View>

                        {loading && currentPage === 1 ? (
                            <Text style={[styles.loadingText, { color: theme.txt }]}>Loading...</Text>
                        ) : scannedUsers.length === 0 ? (
                            renderEmptyState()
                        ) : (
                            <View>
                                {scannedUsers.map((visitor, index) =>
                                    renderVisitorItem(visitor, index, scannedUsers.length)
                                )}
                                {loadingMore && (
                                    <Text style={[styles.loadingText, { color: theme.txt }]}>
                                        Loading more...
                                    </Text>
                                )}
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    backButton: {
        paddingRight: 8
    },
    headerTitle: {
        marginLeft: 4
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
        textAlignVertical: 'center'
    },
    contentContainer: {
        padding: 16,
        backgroundColor: Colors.secondary,
        borderRadius: 15
    },
    sectionHeader: {
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Urbanist-Bold'
    },
    visitorCard: {
        padding: 15,
        borderRadius: 12,
        marginBottom: 10
    },
    visitorName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        fontFamily: 'Urbanist-Bold'
    },
    visitorDetails: {
        gap: 8
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    detailText: {
        fontFamily: 'Urbanist-Bold'
    },
    divider: {
        height: 1,
        backgroundColor: Colors.secondary2
    },
    emptyState: {
        padding: 20,
        alignItems: 'center'
    },
    emptyStateText: {
        fontSize: 16,
        fontFamily: 'Urbanist-Regular'
    },
    loadingText: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        fontFamily: 'Urbanist-Regular'
    }
})

export default LeadDetails