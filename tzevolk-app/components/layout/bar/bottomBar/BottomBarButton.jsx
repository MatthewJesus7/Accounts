import React from 'react';
import { TouchableOpacity } from 'react-native';

const BottomBarButton = ({ label, isSelected, onPress, customclass }) => {
  return (
    <TouchableOpacity
      className={`items-center justify-center w-12 h-12 rounded-md
      ${customclass}
      ${
        isSelected 
        ? 'bg-gray-200' 
        : 'transparent'
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {label}
    </TouchableOpacity>
  );
};

export default BottomBarButton;
