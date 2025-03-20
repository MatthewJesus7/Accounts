import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, View, TextInput } from 'react-native';
import Balance from '../components/pages/Main/Balance';
import Card from '../components/pages/Main/Card';
import BottomBar from '../components/layout/bar/bottomBar/BottomBar';
import InitialSetupPopup from '../components/layout/forms/InitialSetupPopup';

export default function App() {
  // Saldo inicial, que será definido no setup
  const [initialBalance, setInitialBalance] = useState<string>("0");
  // Dia em que o usuário recebe o salário (definido no setup)
  const [salaryDay, setSalaryDay] = useState<string>("1");
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [newCardCost, setNewCardCost] = useState<string>("");
  const [cards, setCards] = useState<{ title: string; cost: string }[]>([]);
  // Exibe o popup de setup na primeira vez
  const [isSetupVisible, setIsSetupVisible] = useState<boolean>(true);

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

  // Quando o setup for concluído, atualiza o saldo e o dia
  const handleSetupSave = (balance: string, payday: string) => {
    setInitialBalance(balance);
    setSalaryDay(payday);
    setIsSetupVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-gray-50">
      <InitialSetupPopup 
         visible={isSetupVisible} 
         onClose={() => setIsSetupVisible(false)}
         onSave={handleSetupSave}
      />
      <ScrollView>
        <View className="p-4">

          <Balance balance={formatarComVirgula(computedBalance)} salaryDay={salaryDay} />

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
      </ScrollView>

      <BottomBar
        newCardTitle={newCardTitle}
        setNewCardTitle={setNewCardTitle}
        newCardCost={newCardCost}
        setNewCardCost={setNewCardCost}
        addCard={addCard}
      />
    </SafeAreaView>
  );
}
