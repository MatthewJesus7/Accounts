import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/input/Input';
import { useNavigation } from '@react-navigation/native';
import { loginWithEmail, sendEmailVerification, checkEmailVerification } from '../config/firebaseConfig'; // Importar funções necessárias
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return;
    }

    setErrorMessage('');

    try {
      await loginWithEmail(email, password);
      const isVerified = await checkEmailVerification(email); // Verifica se o email está verificado

      if (!isVerified) {
        await sendEmailVerification(email); // Envia o código de verificação
        Alert.alert("Email não verificado", "Um código de verificação foi enviado para seu email.");
        navigation.navigate('EmailVerification', { email }); // Navega para a verificação do email
      } else {
        navigation.navigate('index'); // Redireciona para a página inicial
      }
    } catch (error) {
      let errorMessage = '';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email já está cadastrado. Por favor, faça login.';
          break;
        case 'auth/weak-password':
          errorMessage = 'A senha fornecida é muito fraca. Escolha uma senha mais forte.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Este método de autenticação não está habilitado. Contate o administrador.';
          break;
    
        // Erros Comuns
        case 'auth/invalid-verification-code':
          errorMessage = 'Código de verificação inválido. Tente novamente.';
          break;
        case 'auth/invalid-verification-id':
          errorMessage = 'ID de verificação inválido. Tente novamente.';
          break;
    
        // Mensagem padrão para outros erros
        default:
          errorMessage = error.message || 'Ocorreu um erro inesperado. Tente novamente.';
      }
      setErrorMessage(errorMessage);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Entrar</Text>

      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View className="relative">
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute right-4 top-[40px]"
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {errorMessage ? (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg mt-6"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-semibold">Entrar</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-between mt-4">
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text className="text-blue-500 underline">Esqueci minha senha</Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center">
          <Text className="pr-2">Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-blue-500 underline">Registre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
