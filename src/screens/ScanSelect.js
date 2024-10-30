import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { AppBar } from '@react-native-material/core';
import { Colors } from '../theme/color';
import { useRoute } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const ScanSelect = () => {


    const route = useRoute();

    const { event_id } = route.params;
    console.log('event_id: ', event_id);

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [selectedGate, setSelectedGate] = useState(null);
    const [selectedAgenda, setSelectedAgenda] = useState(null);

    const gates = [1, 2, 3, 4, 5];
    // const agenda = ['Agenda 1', 'Agenda 2', 'Agenda 3', 'Agenda 4'];

    const handleSubmit = () => {
        if (!selectedGate) {
            Alert.alert('Error', 'Please select a gate');
            return;
        }
        navigation.navigate('Scanner', { event_id, gate: selectedGate });
    }

    const renderSelectionCards = (items, selectedItem, setSelectedItem, icon) => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.card,
                        { backgroundColor: item === selectedItem ? Colors.default : theme.bgLight }
                    ]}
                    onPress={() => setSelectedItem(item)}
                >
                    <IonIcon name={icon} size={30} color={item === selectedItem ? theme.bg : theme.txt} />
                    <Text style={[styles.cardText, { color: item === selectedItem ? theme.bg : theme.txt }]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20, marginBottom: 100 }]}>
                <ScrollView>
                    {/* Modified Header Section */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // paddingHorizontal: 10,
                        marginBottom: 10
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ScanEvent')}
                            style={{ paddingRight: 8 }}
                        >
                            <IonIcon name="arrow-back" color={theme.txt} size={28} />
                        </TouchableOpacity>
                        <Text style={[style.apptitle, {
                            color: theme.txt,
                            marginLeft: 4
                        }]}>Scan Event</Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.section}>
                            <Text style={[styles.sectionTitle, { color: theme.txt }]}>Select Gate</Text>
                            {renderSelectionCards(gates, selectedGate, setSelectedGate, 'enter-outline')}
                        </View>

                        {/* <View style={styles.section}>
                            <Text style={[styles.sectionTitle, { color: theme.txt }]}>Select Agenta</Text>
                            {renderSelectionCards(agenda, selectedAgenda, setSelectedAgenda, 'person-outline')}
                        </View> */}

                        <TouchableOpacity
                            style={[styles.scanButton, { backgroundColor: Colors.default }]}
                            onPress={handleSubmit}
                        >
                            <IonIcon name="scan-outline" size={24} color={theme.bg} style={styles.scanIcon} />
                            <Text style={[styles.scanButtonText, { color: theme.bg }]}>Start Scanning</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    cardContainer: {
        flexDirection: 'row',
    },
    card: {
        width: width * 0.4,
        padding: 20,
        marginRight: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.secondary1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 30,
        marginTop: 30,
    },
    scanIcon: {
        marginRight: 10,
    },
    scanButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ScanSelect;