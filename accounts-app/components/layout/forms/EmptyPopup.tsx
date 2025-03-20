import * as React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

interface EmptyPopupProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (title: string, cost: string) => void;
  children?: React.ReactNode;
}

const EmptyPopup: React.FC<EmptyPopupProps> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      {/* Área de fundo: clica fora para fechar */}
      <TouchableOpacity
        activeOpacity={1}
        className="flex-1 justify-center items-center bg-black bg-opacity-50"
        onPress={onClose}
      >
        {/* Envolvendo o conteúdo com TouchableWithoutFeedback impede a propagação */}
        <TouchableWithoutFeedback>
          <View className="w-11/12 bg-white p-4 rounded">
            <TouchableOpacity onPress={onClose} className="absolute top-2 right-2">
              <Text className="text-lg font-bold">✖</Text>
            </TouchableOpacity>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default EmptyPopup;
