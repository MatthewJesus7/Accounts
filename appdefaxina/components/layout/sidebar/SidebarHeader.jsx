import React from 'react';
import { View, Text } from 'react-native';

export const SidebarHeader = ({ title }) => (
  <View className="p-4 border-b border-gray-700">
    <Text className="text-white text-xl font-bold">{title}</Text>
  </View>
);
