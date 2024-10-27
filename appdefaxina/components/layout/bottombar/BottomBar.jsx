// components/BottomBar.js
import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { styled } from 'nativewind';

const BottomBarContainer = styled(View, 'absolute bottom-0 w-full flex-row justify-around bg-white p-4 border-t border-gray-200');

const BottomBar = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Home');

  const handlePress = (screen) => {
    setSelectedTab(screen);
    navigation.navigate(screen);
  };

  return (
    <BottomBarContainer className='absolute bottom-0 w-full'>
      <CustomButton
        label="Home"
        isSelected={selectedTab === 'Home'}
        onPress={() => handlePress('index')}
      />
      <CustomButton
        label="Search"
        isSelected={selectedTab === 'Search'}
        onPress={() => handlePress('Search')}
      />
      <CustomButton
        label="Notifs"
        isSelected={selectedTab === 'Notifications'}
        onPress={() => handlePress('Notifications')}
      />
      <CustomButton
        label="Profile"
        isSelected={selectedTab === 'Profile'}
        onPress={() => handlePress('Profile')}
      />
    </BottomBarContainer>
  );
};

export default BottomBar;
