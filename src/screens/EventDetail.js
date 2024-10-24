import { View, Text, Dimensions, SafeAreaView, ImageBackground, TextInput, FlatList, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import IonIcon from 'react-native-vector-icons/Ionicons';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function EventDetail() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const refRBSheet = useRef();

    const [selectedData, setSelectedData] = useState("Select Date and Time");
    const [selectedTicket, setSelectedTicket] = useState(''); // For tracking selected ticket

    const [selectedStartDate, setSelectedStartDate] = useState("Jul 2, 8:00 PM");
    const [selectedEndDate, setSelectedEndDate] = useState("Jul 2, 12:00 PM");
    const [selectedLocation, setSelectedLocation] = useState("Bengaluru");

    // Helper function for scaling font size based on screen width
    const scaleFontSize = (size) => {
        const scale = width / 375;  // 375 is considered as the base width (iPhone 6/7/8)
        return Math.round(size * scale);
    };

    // Dummy data for selection
    const dummyData = [
        { id: 1, label: "Sun, Jul 2, 8:00 PM" },
        { id: 2, label: "Mon, Jul 3, 6:00 PM" },
        { id: 3, label: "Tue, Jul 4, 9:00 PM" }
    ];

    // Dummy ticket data
    const ticketOptions = [
        { id: 'gold', label: 'Gold', price: 'FREE' },
        { id: 'platinum', label: 'Platinum', price: 'FREE' },
        { id: 'silver', label: 'Silver', price: 'FREE' }
    ];

    const handleSelect = (item) => {
        setSelectedData(item.label);
        refRBSheet.current.close(); // Close the bottom sheet after selection
    }

    const handleTicketSelection = (ticketId) => {
        setSelectedTicket(ticketId); // Track the selected ticket
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>

            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: height * 0.01, // Adjust marginTop based on screen height
                    paddingHorizontal: width * 0.05, // Adjust padding based on screen width
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        leading={
                            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                                <IonIcon name="arrow-back" color={theme.txt} size={30} />
                            </TouchableOpacity>
                        }
                    />
                </TouchableOpacity>
                <Text style={[style.title, { color: theme.txt, marginLeft: width * 0.02, fontSize: scaleFontSize(20) }]}>
                    Details
                </Text>
            </View>


            <StatusBar backgroundColor="transparent" barStyle={'light-content'} translucent={true} />

            {/* ScrollView for the entire content */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                {/* Event Image Section */}
                <View>
                    <Image source={require('../../assets/image/e1.png')}
                        style={{ width: '100%', height: height / 3 }} // Adjust height based on the image ratio
                        resizeMode="cover" />
                </View>

                {/* Event Title */}
                <View style={{ padding: 15 }}>
                    <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>
                        Live Music By Melrick @ Stone Street
                    </Text>
                </View>

                {/* Date and Time Selection */}
                <View style={{
                    borderColor: Colors.default, borderWidth: 1, borderRadius: 15,
                    padding: 15, margin: 20, backgroundColor: theme.borderbg
                }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>
                        Select Date and Time
                    </Text>

                    {/* Date and Time Container with Icon on the Right */}
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        marginTop: 10, padding: 10, borderColor: '#F0F1F3', borderWidth: 1, borderRadius: 10,
                        backgroundColor: theme.bg
                    }} onPress={() => refRBSheet.current.open()}>

                        {/* Left Side - Selected Data Display */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={[style.r14, { color: theme.txt }]}>
                                    {selectedData}
                                </Text>

                                {/* Location Row */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    <Icon2 name='google-maps' size={15} color={theme.disable} style={{ marginRight: 5 }} />
                                    <Text style={[style.r12, { color: theme.disable1 }]}>
                                        Stage Name, Bengaluru KA
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Right Side - Selection Icon */}
                        <Icon name="chevron-down-outline" size={20} color={Colors.default} />
                    </TouchableOpacity>
                </View>

                {/* Ticket Selection Section */}
                <View style={{ margin: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>Select Tickets (Max 10 each)</Text>

                    {/* Ticket Options */}
                    {ticketOptions.map((ticket) => (
                        <TouchableOpacity
                            key={ticket.id}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 10,
                                borderWidth: 1,
                                borderColor: selectedTicket === ticket.id ? Colors.default : '#F0F1F3',
                                borderRadius: 10,
                                marginVertical: 5,
                                backgroundColor: selectedTicket === ticket.id ? Colors.default : theme.bg
                            }}
                            onPress={() => handleTicketSelection(ticket.id)}
                        >
                            <Text style={{ color: theme.txt }}>{ticket.label}</Text>
                            <Text style={{ color: theme.txt }}>{ticket.price}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* When and Where Section */}
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>When and Where</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        {/* Start Date */}
                        <TouchableOpacity style={styles.card} onPress={() => refRBSheet.current.open()}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="calendar-outline" size={20} color={theme.txt} />
                                <Text style={styles.cardText}>Start date</Text>
                            </View>
                            <Text style={styles.cardSubText}>{selectedStartDate}</Text>
                        </TouchableOpacity>

                        {/* End Date */}
                        <TouchableOpacity style={styles.card} onPress={() => refRBSheet.current.open()}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="calendar-outline" size={20} color={theme.txt} />
                                <Text style={styles.cardText}>End date</Text>
                            </View>
                            <Text style={styles.cardSubText}>{selectedEndDate}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Location */}
                    <View style={[styles.card, { marginTop: 10 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon2 name="map-marker" size={20} color={theme.txt} />
                            <Text style={styles.cardText}>Location</Text>
                        </View>
                        <Text style={styles.cardSubText}>{selectedLocation}</Text>
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    <Text style={[style.r16, { color: theme.txt }]}>Lorem ipsum dolor sit amet consectetur. Est donec egestas eu morbi erat eget dictum. Vehicula quis elit et cursus fermentum. Duis nunc nibh leo mauris elit nibh eu iaculis.</Text>
                </View>

                {/* Organizer Info Section */}
                <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    {/* Organizer Image */}
                    <Image
                        source={require('../../assets/image/person01.png')}
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                    {/* Follower Count and Follow Button */}
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[style.r16, { color: theme.txt }]}>Organizer name</Text>
                        <Text style={[style.r14, { color: theme.disable1 }]}>100 followers</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft: 'auto', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.r14, { color: Colors.default }]}>Follow</Text>
                        <Icon name="add-circle-outline" size={16} color={Colors.default} style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>


                {/* Exhibitors Section */}
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>Exhibitors</Text>

                    {/* Exhibitor Items */}
                    {['Exhibitor Name', 'Exhibitor Name', 'Exhibitor Name'].map((exhibitor, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                            <Image
                                source={require('../../assets/image/exibiter.png')}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                            <Text style={[style.r14, { color: theme.txt, marginLeft: 10 }]}>{exhibitor}</Text>
                            <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                <Icon name="chevron-forward-outline" size={20} color={theme.disable} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Rating Section */}
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: theme.borderbg,
                    alignItems: 'center'
                }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>Rate this event</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <Icon
                                key={index}
                                name={star <= 3 ? "star" : "star-outline"} // Adjust this based on rating value
                                size={30}
                                color={Colors.default}
                                style={{ marginHorizontal: 5 }}
                            />
                        ))}
                    </View>
                </View>

                {/* Register Section */}
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>Register to this event</Text>

                    {/* Register Options */}
                    {['As an Exhibitor', 'As a Sponsor', 'As a Performer'].map((role, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                                borderRadius: 10,
                                backgroundColor: theme.borderbg,
                                marginVertical: 10
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* Assign specific icons based on the role */}
                                <Icon
                                    name={
                                        role === 'As an Exhibitor' ? 'people-outline'
                                            : role === 'As a Sponsor' ? 'briefcase-outline'
                                                : 'musical-notes-outline' // Icon for "As a Performer"
                                    }
                                    size={20}
                                    color={theme.txt}
                                />
                                <Text style={[style.r14, { color: theme.txt, marginLeft: 10 }]}>{role}</Text>
                            </View>
                            <Icon name="chevron-forward-outline" size={20} color={theme.disable} />
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>

            {/* Confirm Tickets Button */}
            <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BookEvent')}
                    style={[style.btn, { paddingVertical: 15 }]}>
                    <Text style={[style.btntxt, { textAlign: 'center' }]}>Confirm Tickets</Text>
                </TouchableOpacity>
            </View>


            {/* RBSheet for Selecting Date and Time */}
            <RBSheet
                ref={refRBSheet}
                height={250}
                openDuration={250}
                customStyles={{
                    container: {
                        paddingHorizontal: 10
                    }
                }}
            >
                <View>
                    <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center', marginVertical: 10 }]}>
                        Select Date and Time
                    </Text>

                    {/* FlatList to display dummy data */}
                    <FlatList
                        data={dummyData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row', // Align horizontally
                                    alignItems: 'center', // Vertically center content
                                    padding: 15,
                                    backgroundColor: item.label === selectedData ? Colors.default : theme.bg,
                                    marginVertical: 5,
                                    borderRadius: 10
                                }}
                                onPress={() => handleSelect(item)}
                            >
                                {/* Calendar Icon */}
                                <Icon2 name="calendar" size={20} color={theme.disable} style={{ marginRight: 10 }} />
                                {/* Text Label */}
                                <Text style={[style.r14, { color: theme.txt }]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </RBSheet>

        </SafeAreaView>
    )
}


// Styles for Cards and Texts
const styles = {
    card: {
        flex: 1,
        borderColor: '#F0F1F3',
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        backgroundColor: theme.bg,
        marginHorizontal: 5
    },
    cardText: {
        fontSize: 12,
        marginLeft: 10,
        color: theme.disable
    },
    cardSubText: {
        fontSize: 14,
        color: Colors.active,
        marginTop: 5
    }
};