// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Input from '../components/input/Input';

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    // simulação de lógica de login

    navigation.navigate('index')
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">

      <Text className="text-2xl font-bold text-center mb-8">
        Login
      </Text>

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
      <TouchableOpacity 
      className="bg-blue-500 p-4 rounded-lg mt-6" 
      onPress={handleLogin}>
        <Text className="text-white text-center font-semibold">Entrar</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center">
        <Text className="pr-2">Não possui uma conta?</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Register')}>
            <Text className="text-blue-500 underline">Entrar agora</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;
