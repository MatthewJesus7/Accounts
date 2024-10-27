import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';
import BottomBar from '../components/layout/bottombar/BottomBar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Nome do Usuário');
  const [email, setEmail] = useState('usuario@example.com');
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [birthdate, setBirthdate] = useState('01/01/2000');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View className='h-full'>
      <View className="flex-1 items-center p-4">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-32 h-32 rounded-full"
        />
        <View className="self-end">
          <TouchableOpacity
            className='w-10 h-10 bg-gray-500 rounded-full'
            title={isEditing ? 'Salvar' : 'Editar Perfil'}
            onPress={handleEditToggle}
          />
        </View>
        <Text className="text-2xl font-bold mb-2">{name}</Text>
        <View className="w-full max-w-md h-[100vh] bg-white rounded-lg p-4 mb-4 mt-10 shadow">
          <Text className="text-lg mb-2">Email:</Text>
          <TextInput
            className="h-10 border border-gray-300 rounded px-2 mb-4"
            value={email}
            editable={isEditing}
            onChangeText={setEmail}
          />
          <Text className="text-lg mb-2">Telefone:</Text>
          <TextInput
            className="h-10 border border-gray-300 rounded px-2 mb-4"
            value={phone}
            editable={isEditing}
            onChangeText={setPhone}
          />
          <Text className="text-lg mb-2">Data de Nascimento:</Text>
          <TextInput
            className="h-10 border border-gray-300 rounded px-2 mb-4"
            value={birthdate}
            editable={isEditing}
            onChangeText={setBirthdate}
          />
        </View>
      </View>

      <BottomBar></BottomBar>
    </View>
  );
};

export default Profile;
