import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSidebar } from './SidebarContext';

export const SidebarToggleButton = () => {
  const { toggleSidebar } = useSidebar();
  const { isOpen } = useSidebar();
  
  return (
    <TouchableOpacity
    onPress={toggleSidebar}
    className={`p-2 rounded w-10 h-10 bg-gray-500 mr-4 ${
      isOpen ? 'translate-x-0' : 'translate-x-64'
    }`}
  >
    <Text className="text-white"></Text>
  </TouchableOpacity>
  );
};
