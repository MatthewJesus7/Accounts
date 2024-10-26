import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { verifyEmailCode } from '../config/firebaseConfig'; // Importar a função de verificação

const EmailVerification = ({ route, navigation }) => {
  const { email } = route.params; // Receber o email como parâmetro
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerify = async () => {
    if (!code) {
      setErrorMessage('Por favor, insira o código de verificação.');
      return;
    }

    try {
      const isVerified = await verifyEmailCode(email, code); // Verificar o código
      if (isVerified) {
        Alert.alert('Verificação concluída', 'Seu email foi verificado com sucesso!');
        navigation.navigate('index');
      } else {
        setErrorMessage('Código de verificação inválido. Tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao verificar o código. Tente novamente.');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Verificação de Email</Text>
      <Text className="mb-4">Insira o código enviado para {email}:</Text>
      <TextInput
        placeholder="Código de verificação"
        value={code}
        onChangeText={setCode}
        className="border border-gray-300 rounded-lg p-2 mb-4"
      />
      {errorMessage ? (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      ) : null}
      <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-6" onPress={handleVerify}>
        <Text className="text-white text-center font-semibold">Verificar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailVerification;
