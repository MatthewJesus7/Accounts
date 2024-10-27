import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/input/Input'; // Importando o componente de entrada
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth'; // Importando a função do Firebase
import { auth } from '../config/firebaseConfig'; // Importando a configuração do Firebase

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Instruções enviadas', `Um e-mail foi enviado para ${email} com instruções para redefinir sua senha.`);
      setEmail(''); // Limpa o campo de entrada após o envio
      navigation.navigate('Login'); // Navega para a tela de login após o envio
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Nenhum usuário encontrado com este e-mail.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'O e-mail fornecido é inválido.';
          break;
        default:
          errorMessage = error.message || 'Ocorreu um erro inesperado. Tente novamente.';
      }
      setErrorMessage(errorMessage);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Esqueci Minha Senha</Text>
      <Text className="mb-4 text-center">Insira seu e-mail para receber instruções de redefinição de senha:</Text>

      <Input
        label="Email"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {errorMessage ? (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        className={`p-4 rounded-lg mt-6 bg-blue-500`}
        onPress={handleResetPassword}
      >
        <Text className="text-white text-center font-semibold">Enviar Instruções</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center mt-4">
        <Text className="pr-2">Lembrou sua senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-blue-500 underline">Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
