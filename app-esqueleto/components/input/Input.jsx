// src/components/Input.js
import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry, keyboardType, classname}) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-700 mb-2">{label}</Text>}
      <TextInput
        className={`bg-white p-4 rounded-lg border border-gray-300 ${classname}`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
