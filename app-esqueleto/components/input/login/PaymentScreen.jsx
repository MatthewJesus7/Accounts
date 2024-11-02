// src/screens/PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from './Input';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Aqui você pode adicionar a lógica para processar o pagamento
    console.log("Card:", cardNumber, "Expiry:", expiryDate, "CVV:", cvv);
  };

  return (
    <View className="flex-1 justify-center px-6 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Método de Pagamento</Text>
      <Input
        label="Número do Cartão"
        placeholder="0000 0000 0000 0000"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <Input
        label="Data de Expiração"
        placeholder="MM/AA"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <Input
        label="CVV"
        placeholder="123"
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
      />
      <TouchableOpacity className="bg-green-500 p-4 rounded-lg mt-6" onPress={handlePayment}>
        <Text className="text-white text-center font-semibold">Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
