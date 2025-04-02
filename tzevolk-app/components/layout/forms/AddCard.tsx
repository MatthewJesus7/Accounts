import * as React from 'react';
import { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import BottomPopup from '../animations/BottomPopup';

type AddCardProps = {
  newCardTitle: string;
  setNewCardTitle: (value: string) => void;
  newCardCost: string;
  setNewCardCost: (value: string) => void;
  addCard: () => boolean; // Agora retorna um booleano indicando sucesso
};

const AddCard: React.FC<AddCardProps> = ({
  newCardTitle,
  setNewCardTitle,
  newCardCost,
  setNewCardCost,
  addCard,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAddCard = () => {
    const success = addCard(); // Chama a função e recebe se deu certo
    if (success) {
      setPopupVisible(true); // Exibe o popup se foi bem sucedido
    }
  };

  return (
    <View>
      <TextInput
        className="border border-gray-400 p-2 mb-2"
        value={newCardTitle}
        onChangeText={setNewCardTitle}
        placeholder="Título do card"
      />
      <TextInput
        className="border border-gray-400 p-2 mb-2"
        value={newCardCost}
        onChangeText={setNewCardCost}
        placeholder="Custo do card (ex: 1,234 ou 1,23)"
        keyboardType="numeric"
      />
      <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={handleAddCard}>
        <Text className="text-white text-center">Adicionar Card</Text>
      </TouchableOpacity>

      <BottomPopup visible={popupVisible} onClose={() => setPopupVisible(false)} />
    </View>
  );
};

export default AddCard;
