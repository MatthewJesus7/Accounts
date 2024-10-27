// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';

const ButtonContainer = styled(TouchableOpacity);

const CustomButton = ({ label, isSelected, onPress }) => {
  return (
    <ButtonContainer
      className={`items-center justify-center p-2 rounded-full w-14 h-14 ${
        isSelected ? 'bg-blue-600' : 'bg-blue-400'
      }`}
      onPress={onPress}
    >
      <Text className="text-white">{label}</Text>
    </ButtonContainer>
  );
};

export default CustomButton;