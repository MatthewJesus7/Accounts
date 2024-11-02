import React from 'react';
import { View } from 'react-native';
import { SidebarMenuItem } from './SidebarMenuItem';

export const SidebarMenu = () => {
  return (
    <View className="py-4">
      <SidebarMenuItem title="Home" />
      <SidebarMenuItem title="Profile" />
      <SidebarMenuItem title="Settings" />
      <SidebarMenuItem title="Logout" />
    </View>
  );
};
