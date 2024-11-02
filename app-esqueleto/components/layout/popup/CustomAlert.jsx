import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const CustomAlert = ({ visible, onClose, title, message }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="w-72 p-6 bg-white rounded-lg items-center">
          <Text className="text-lg font-bold mb-2 text-gray-800">{title}</Text>
          <Text className="text-center text-gray-600 mb-4">{message}</Text>
          <TouchableOpacity
            className="bg-blue-500 px-4 py-2 rounded"
            onPress={onClose}
          >
            <Text className="text-white font-semibold">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;