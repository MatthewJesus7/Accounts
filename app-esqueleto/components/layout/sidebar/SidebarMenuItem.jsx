import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const SidebarMenuItem = ({ title }) => (
  <TouchableOpacity className="py-2 px-4 hover:bg-gray-700">
    <Text className="text-white">{title}</Text>
  </TouchableOpacity>
);
