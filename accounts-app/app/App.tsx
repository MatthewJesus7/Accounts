import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Balance from '../components/pages/Main/Balance';
import Card from '../components/pages/Main/Card';
import BottomBar from '../components/layout/bar/bottomBar/BottomBar';

export default function App() {
  const [initialBalance, setInitialBalance] = useState<string>("10000");
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [newCardCost, setNewCardCost] = useState<string>("");
  const [cards, setCards] = useState<{ title: string; cost: string }[]>([]);

  const parseNumberFromPT = (str: string): number =>
    parseFloat(str.replace(/\./g, '').replace(',', '.')) || 0;
  const formatarComVirgula = (numero: number): string =>
    new Intl.NumberFormat('pt-BR').format(numero);

  const totalCosts = cards.reduce((sum, card) => sum + parseNumberFromPT(card.cost), 0);
  const computedBalance = parseNumberFromPT(initialBalance) - totalCosts;

  const addCard = () => {
    if (newCardTitle && newCardCost) {
      setCards([...cards, { title: newCardTitle, cost: newCardCost }]);
      setNewCardTitle("");
      setNewCardCost("");
    }
  };

  return (
    <View className="flex-1 justify-between h-[100vh] bg-gray-50">
      <View className="p-4">
        <TextInput
          className="border border-gray-400 p-2 mb-4"
          value={initialBalance}
          onChangeText={setInitialBalance}
          placeholder="Digite o saldo inicial (ex: 10.000,00)"
          keyboardType="numeric"
        />

        <Balance balance={formatarComVirgula(computedBalance)} />
        
        <View className="mt-4">
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
          <TouchableOpacity className="bg-blue-500 p-2 rounded" onPress={addCard}>
            <Text className="text-white text-center">Adicionar Card</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              cost={formatarComVirgula(parseNumberFromPT(card.cost))}
            />
          ))}
        </View>
      </View>
      <BottomBar />
    </View>
  );
}
