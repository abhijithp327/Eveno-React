import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, AppBar } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../redux/features/eventSlice';
import appConfig from '../config/appConfig';
import EventImage from '../../assets/image/m18.png';

const PER_PAGE = 10;

const ScanEvent = () => {
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

      const response = await dispatch(getAllEvents({
        perPage: PER_PAGE,
        page: pageNumber,
        searchQuery
      }));
      
      if (response.payload) {
        const newEvents = response.payload.events || [];
        if (shouldRefresh || pageNumber === 1) {
          setAllEvents(newEvents);
        } else {
          setAllEvents(prev => [...prev, ...newEvents]);
        }
        // Assuming your API returns total number of events or some indication
        // that there are more events to load
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

  // Initial load
  useEffect(() => {
    fetchEvents(1);
  }, []);

  // Handle search with debounce
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

  const renderItem = ({ item: event }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ScanSelect', { event_id: event.id })}
      style={{
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        borderColor: Colors.secondary1,
        borderWidth: 1,
        marginBottom: 15
      }}>
      <Image
        source={
          event.event_images && Array.isArray(event.event_images) && event.event_images.length > 0
            ? { uri: `${appConfig.server.imageBaseUrl}${event.event_images[0]}` }
            : EventImage
        }
        style={{ width: 60, height: 60, borderRadius: 10 }}
      />
      <View style={{
        marginLeft: 15,
        flex: 1,
        paddingRight: 10,
        justifyContent: 'space-between'
      }}>
        <Text
          style={[
            style.b16,
            {
              color: theme.txt,
              flexShrink: 1,
              flexWrap: 'wrap',
              marginBottom: 4
            }
          ]}
          numberOfLines={1}
        >
          {event.event_title}
        </Text>
        <Text
          style={[
            style.r14,
            {
              color: theme.txt,
              marginBottom: 4
            }
          ]}
        >
          {new Date(event.event_start_datetime).toLocaleString()}
        </Text>
        <Text
          style={[
            style.r14,
            {
              color: theme.txt,
              flexShrink: 1,
              flexWrap: 'wrap'
            }
          ]}
          numberOfLines={1}
        >
          {event.event_location}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" color={Colors.default} />
      </View>
    );
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <AppBar
            color={theme.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                <IonIcon name="arrow-back" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          />
          <Text style={[style.apptitle, { color: theme.txt, flex: 1, marginLeft: 8 }]}>Scan Events</Text>
        </View>

        {/* Search Bar */}
        <View style={{
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 40,
          paddingHorizontal: 10,
          height: 50,
          borderColor: Colors.secondary2,
          padding: 10
        }}>
          <Icon name="search" size={16} color={Colors.disable} style={{ paddingHorizontal: 8 }} />
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
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Event List */}
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.default} />
            <Text style={[style.b16, { color: theme.txt }]}>Loading Events...</Text>
          </View>
        ) : (
          <FlatList
            data={allEvents}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingTop: 20 }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.3}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={
              <Text style={[style.b16, { color: theme.txt, textAlign: 'center', marginTop: 20 }]}>
                {searchQuery ? 'No events found matching your search' : 'No events available'}
              </Text>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScanEvent;