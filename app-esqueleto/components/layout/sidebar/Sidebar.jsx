import React from 'react';
import { View } from 'react-native';
import { useSidebar } from './SidebarContext';

export const Sidebar = ({ children }) => {
  const { isOpen } = useSidebar();
  
  return (
    <View className={`fixed top-0 left-0 w-64 h-[100vh] bg-gray-800 
    ${isOpen 
    ? 'translate-x-0' 
    : 'translate-x-64'
    }`}>
      
      {children}
    </View>
  );
};
