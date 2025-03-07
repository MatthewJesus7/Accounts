import React, { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

import BottomBarButton from './BottomBarButton';
import Section from '../../Section';

import { HomeIcon, PlusIcon, ChartBarIcon } from 'react-native-heroicons/outline';

const ICON_COLOR_SELECTED = "#030712";
const ICON_COLOR_DEFAULT = "#6b7280";

const BottomBar = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const router = useRouter();

  const handlePress = (screen) => {
    setSelectedTab(screen);
    router.replace(screen);
  };

  const getIconColor = (screen) => (
    selectedTab === screen ? ICON_COLOR_SELECTED : ICON_COLOR_DEFAULT
  );

  return (
      <View className="flex-row justify-around items-center w-full h-16 border-t border-gray-200 bg-gray-50">
        <BottomBarButton
          label={<HomeIcon width={24} height={24} color={getIconColor('home')} />}
          isSelected={selectedTab === 'home'}
          onPress={() => handlePress('home')}
        />
        <BottomBarButton
          label={<PlusIcon width={24} height={24} color={getIconColor('plus')} />}
          isSelected={selectedTab === 'plus'}
          onPress={() => handlePress('plus')}
          customclass="bg-gray-900 -mt-8"
        />
        <BottomBarButton
          label={<ChartBarIcon width={24} height={24} color={getIconColor('stats')} />}
          isSelected={selectedTab === 'stats'}
          onPress={() => handlePress('stats')}
        />
      </View>
  );
};

export default BottomBar;
