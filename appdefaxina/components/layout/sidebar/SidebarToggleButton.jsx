import React from 'react';
import { Button } from 'react-native';
import { useSidebar } from './SidebarContext';

export const SidebarToggleButton = () => {
  const { toggleSidebar } = useSidebar();
  
  return (
    <Button 
    title={`X`} 
    onPress={toggleSidebar} 
    className={`
      bg-gray-500 text-white p-2 rounded
      ${toggleSidebar
        ?'bg-red-500'
        :'bg-blue-500'
      }
      `}
    />
  );
};
