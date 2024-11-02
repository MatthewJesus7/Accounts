import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';

const ButtonContainer = styled(TouchableOpacity);

const CustomButton = ({ label, isSelected, onPress }) => {
  return (
    <ButtonContainer
      className={`items-center justify-between p-3 rounded-full w-14 h-14
        ${isSelected ? 'bg-gray-700 shadow-lg' : 'bg-gray-600'} 
         transition-all duration-200 ease-in-out 
        hover:scale-105`}
      onPress={onPress}
      activeOpacity={0.7} // Efeito de pressão
    >
      <Text className={`text-white font-semibold text-lg`}>
        {label}
      </Text>
    </ButtonContainer>
  );
};

export default CustomButton;
