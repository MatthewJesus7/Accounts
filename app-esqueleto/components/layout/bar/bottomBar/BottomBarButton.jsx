import React from 'react';
import { TouchableOpacity } from 'react-native';

const BottomBarButton = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      className={`items-center justify-center w-14 h-14 rounded-full ${
        isSelected ? 'bg-gray-700 shadow-lg' : 'bg-gray-600'
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {label}
    </TouchableOpacity>
  );
};

export default BottomBarButton;
