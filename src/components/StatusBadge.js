import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StatusBadge = ({ status }) => {
  const getBadgeStyles = () => {
    switch (status) {
      case 'approved':
        return {
          backgroundColor: '#E6F6EC',
          color: '#3CB371', // Green color for the text and icon
          icon: 'check-circle', // Icon for approved
        };
      case 'rejected':
        return {
          backgroundColor: '#FDECEC',
          color: '#E74C3C', // Red for rejected
          icon: 'cancel',
        };
      case 'pending':
        return {
          backgroundColor: '#FFF8E1',
          color: '#FBC02D', // Yellow for pending
          icon: 'hourglass-empty',
        };
      default:
        return {
          backgroundColor: '#E6F6EC',
          color: '#3CB371',
          icon: 'check-circle',
        };
    }
  };

  const { backgroundColor, color, icon } = getBadgeStyles();

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 20, // Rounded pill-like shape
    }}>
      <Icon name={icon} size={16} color={color} style={{ marginRight: 4 }} />
      <Text style={{ color: color, fontWeight: '500' }}>
        {status.charAt(0).toUpperCase() + status.slice(1)} {/* Capitalize first letter */}
      </Text>
    </View>
  );
};

export default StatusBadge;
