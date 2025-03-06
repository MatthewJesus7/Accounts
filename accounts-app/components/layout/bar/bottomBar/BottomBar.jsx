import React, { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import BottomBarButton from './BottomBarButton';
import { Ionicons } from '@expo/vector-icons';

const BottomBar = () => {
  const [selectedTab, setSelectedTab] = useState('/index');
  const router = useRouter();

  const handlePress = (screen) => {
    setSelectedTab(screen);
    router.replace(screen); // Navega para a tela selecionada
  };

  return (
    <View className="flex-row flex-shrink-0 justify-around w-full h-10 p-3 border-t border-gray-200 bg-gray-600">

{/* w-10 h-10 bg-red-500 */}

      <BottomBarButton
        label={<Ionicons name="home-outline" size={24} color={selectedTab === '/' ? 'white' : 'black'} />}
        isSelected={selectedTab === '/'}
        onPress={() => handlePress('/')}
      />
      <BottomBarButton
        label={<Ionicons name="search-outline" size={24} color={selectedTab === 'Search' ? 'white' : 'black'} />}
        isSelected={selectedTab === 'Search'}
        onPress={() => handlePress('Search')}
      />
      <BottomBarButton
        label={<Ionicons name="notifications-outline" size={24} color={selectedTab === 'Notifications' ? 'white' : 'black'} />}
        isSelected={selectedTab === 'Notifications'}
        onPress={() => handlePress('Notifications')}
      />
      <BottomBarButton
        label={<Ionicons name="person-outline" size={24} color={selectedTab === 'Profile' ? 'white' : 'black'} />}
        isSelected={selectedTab === 'Profile'}
        onPress={() => handlePress('Profile')}
      />
    </View>
  );
};

export default BottomBar;
