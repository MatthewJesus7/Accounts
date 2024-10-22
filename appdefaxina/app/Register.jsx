// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../components/input/Input';

import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log("Nome:", name, "Email:", email, "Senha:", password);
    navigation.navigate('index');
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">

      <Text className="text-2xl font-bold text-center mb-8">
        Cadastro
      </Text>

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
      
      <TouchableOpacity 
        className="bg-blue-500 p-4 rounded-lg mt-6" 
        onPress={handleRegister}>
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
