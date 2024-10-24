import React, { useContext } from 'react';
import {
    View, Text, SafeAreaView, TextInput, TouchableOpacity, Switch, Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { AppBar } from '@react-native-material/core';
import IonIcon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

// Helper function for scaling font size based on screen width
const scaleFontSize = (size) => {
    const scale = width / 375;  // 375 is considered as the base width (iPhone 6/7/8)
    return Math.round(size * scale);
};

const CreateEvent = () => {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [subVenueEnabled, setSubVenueEnabled] = React.useState(false);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: height * 0.06, // Adjust marginTop based on screen height
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
                    Create an Event / <Text style={{ fontWeight: 'bold', fontSize: scaleFontSize(18) }}>Basic Info</Text>
                </Text>
            </View>


         

            {/* Next Button */}
            <View style={{ paddingHorizontal: width * 0.05, marginTop: height * 0.04 }}>
                <TouchableOpacity
                    style={[style.btn, { height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}
                >
                    <Text style={[style.btntxt, { color: Colors.secondary, fontSize: scaleFontSize(16) }]}>Next</Text>
                    {/* <Avatar.Icon
                        icon="chevron-right"
                        size={24}
                        style={{ backgroundColor: Colors.default, marginLeft: width * 0.02 }}
                    /> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreateEvent;
