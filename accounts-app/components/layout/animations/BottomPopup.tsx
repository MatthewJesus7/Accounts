import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';

interface BottomPopupProps {
  visible: boolean;
  onClose: () => void;
}

const BottomPopup: React.FC<BottomPopupProps> = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000); // Fecha após 3s
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end items-center bg-black bg-opacity-30">
        <View className="w-11/12 bg-gray-800 p-4 rounded-lg mb-5">
          <Text className="text-white text-center">Card adicionado!</Text>
          <View className="h-1 bg-gray-600 mt-2 rounded-full overflow-hidden">
            <View className="h-1 bg-green-500 w-full animate-[progress_3s_linear]" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomPopup;
