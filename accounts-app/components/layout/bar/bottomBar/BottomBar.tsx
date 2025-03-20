import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import BottomBarButton from './BottomBarButton';
import EmptyPopup from '../../forms/EmptyPopup';
import AddCard from '../../forms/AddCard';
import { HomeIcon, PlusIcon, ChartBarIcon } from 'react-native-heroicons/outline';

type BottomBarProps = {
  newCardTitle: string;
  setNewCardTitle: (value: string) => void;
  newCardCost: string;
  setNewCardCost: (value: string) => void;
  addCard: () => void;
};

const ICON_COLOR_SELECTED = "#030712";
const ICON_COLOR_DEFAULT = "#6b7280";

const BottomBar: React.FC<BottomBarProps> = ({
  newCardTitle,
  setNewCardTitle,
  newCardCost,
  setNewCardCost,
  addCard,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const router = useRouter();
  const [isEmptyPopupVisible, setIsEmptyPopupVisible] = useState<boolean>(false);

  const handlePress = (screen: string): void => {
    setSelectedTab(screen);
    router.replace(screen);
  };

  const getIconColor = (screen: string): string =>
    selectedTab === screen ? ICON_COLOR_SELECTED : ICON_COLOR_DEFAULT;

  const createNewCard = (): void => {
    setIsEmptyPopupVisible(true);
  };

  return (
    <>
      <EmptyPopup
        visible={isEmptyPopupVisible}
        onClose={() => setIsEmptyPopupVisible(false)}
      >
        <AddCard
          newCardTitle={newCardTitle}
          setNewCardTitle={setNewCardTitle}
          newCardCost={newCardCost}
          setNewCardCost={setNewCardCost}
          addCard={addCard}
        />
      </EmptyPopup>

      <View className="flex-row justify-around items-center w-full h-16 border-t border-gray-200 bg-gray-50">
        <BottomBarButton
          label={<HomeIcon width={24} height={24} color={getIconColor('home')} />}
          isSelected={selectedTab === 'home'}
          onPress={() => handlePress('home')}
        />

        <BottomBarButton
          label={<PlusIcon width={24} height={24} color={getIconColor('plus')} />}
          isSelected={selectedTab === 'plus'}
          onPress={createNewCard}
          customclass="bg-gray-900 -mt-16"
        />

        <BottomBarButton
          label={<ChartBarIcon width={24} height={24} color={getIconColor('stats')} />}
          isSelected={selectedTab === 'stats'}
          onPress={() => handlePress('stats')}
        />
      </View>
    </>
  );
};

export default BottomBar;
