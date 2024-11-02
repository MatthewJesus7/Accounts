import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../components/input/Input';
import CustomAlert from '../components/layout/popup/CustomAlert';

import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      setAlertTitle('Erro');
      setAlertMessage('Por favor, insira um e-mail válido.');
      setAlertVisible(true);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setAlertTitle('Instruções enviadas');
      setAlertMessage(`Um e-mail foi enviado para ${email} com instruções para redefinir sua senha.`);
      setAlertVisible(true);
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
      setAlertTitle('Erro');
      setAlertMessage(errorMessage);
      setAlertVisible(true);
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

      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        title={alertTitle}
        message={alertMessage}
      />
    </View>
  );
};

export default ForgotPassword;