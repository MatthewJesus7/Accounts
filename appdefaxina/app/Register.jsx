import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../components/input/Input';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../config/firebaseConfig'; // Importa a função signUp do firebaseAuth

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    // Validação básica
    if (!name || !email || !password) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return;
    }
    
    if (password.length < 8) {
      setErrorMessage('A senha deve ter pelo menos 8 caracteres!');
      return;
    }

    setErrorMessage(''); // Limpa mensagens de erro
    try {
      await signUp(email, password); // Chama a função signUp com email e senha
      navigation.navigate('index'); // Navega para a tela inicial após o registro
    } catch (error) {
      setErrorMessage(error.message); // Exibe erro no campo
    }
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Cadastro</Text>

      <Input
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMessage ? (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      ) : null}

      <TouchableOpacity 
        className="bg-blue-500 p-4 rounded-lg mt-6" 
        onPress={handleRegister}
        disabled={!name || !email || password.length < 8}
      >
        <Text className="text-white text-center font-semibold">Cadastrar</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center mt-4">
        <Text className="pr-2">Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-blue-500 underline">Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
