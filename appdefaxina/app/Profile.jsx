import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { saveUserData, getUserData, signOutUser } from '../config/authService';
import BottomBar from '../components/layout/bottombar/BottomBar';

const Profile = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    subscriptionStatus: '',
    createdAt: '',
    profileImage: '', 
    bannerImage: '',
  });

  // Carrega os dados do usuário
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        if (data) {
          setUserData({
            name: data.name || 'Nome do Usuário',
            email: data.email || 'usuario@example.com',
            phone: data.phone || '(11) 98765-4321',
            birthdate: data.birthdate || '01/01/2000',
            companyName: data.companyName || 'Nome da Empresa',
            role: data.role || 'Cargo',
            website: data.website || 'https://example.com',
            leadCount: data.leadCount || 0,
            subscriptionStatus: data.subscriptionStatus || 'Gratuito',
            createdAt: data.createdAt || '01/01/2023',
            profileImage: data.profileImage || 'https://via.placeholder.com/150',
            bannerImage: data.bannerImage || '', // Adicione a URL do banner
          });
        } else {
          Alert.alert('Nenhum dado encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro ao buscar dados: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      await saveUserData(userData);
      Alert.alert('Dados salvos com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao salvar os dados: ' + error.message);
    }
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  const pickImage = async (imageType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUserData((prevData) => ({
        ...prevData,
        [imageType]: result.uri,
      }));
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser(); // Chama a função de signOut para sair
      Alert.alert('Logout realizado com sucesso!');
      navigation.navigate('Login')
    } catch (error) {
      Alert.alert('Erro ao realizar logout: ' + error.message);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando dados do perfil...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-grow">
        <View className="flex-1 items-center p-6">
          {/* Banner editável */}
          <TouchableOpacity
            className="relative -top-10 left-0 w-[100vw] h-44"
            onPress={() => isEditing && pickImage('bannerImage')}
          >
            <Image
              source={{ uri: userData.bannerImage || 'https://via.placeholder.com/300x100' }}
              style={{ width: '100%', height: '100%' }}
            />
          </TouchableOpacity>

          {/* Imagem de perfil editável */}
          <TouchableOpacity onPress={() => isEditing && pickImage('profileImage')}>
            <Image
              source={{ uri: userData.profileImage }}
              className="w-32 h-32 rounded-full mb-4 shadow-lg -mt-24"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="px-4 py-2 bg-indigo-600 rounded-full mb-4"
            onPress={handleEditToggle}
          >
            <Text className="text-white font-semibold">
              {isEditing ? 'Salvar' : 'Editar'}
            </Text>
          </TouchableOpacity>

          <Text className="text-2xl font-bold mb-6">{userData.name}</Text>

          {/* Dados do usuário */}
          <View className="w-full max-w-md bg-white rounded-lg p-6 shadow-md space-y-4">
            <Text className="text-lg font-semibold text-gray-700">Dados Pessoais</Text>
            <View>
              <Text className="text-gray-700">Email:</Text>
              <TextInput
                className="h-10 border border-gray-300 rounded px-2"
                value={userData.email}
                editable={isEditing}
                onChangeText={(text) => setUserData({ ...userData, email: text })}
              />
            </View>
            <View>
              <Text className="text-gray-700">Telefone:</Text>
              <TextInput
                className="h-10 border border-gray-300 rounded px-2"
                value={userData.phone}
                editable={isEditing}
                onChangeText={(text) => setUserData({ ...userData, phone: text })}
              />
            </View>
            {/* Mais campos de dados */}
                      {/* Botão de logout */}
          <TouchableOpacity
            className="px-4 py-2 bg-red-500 rounded-full mb-4"
            onPress={handleLogout}
          >
            <Text className="text-white font-semibold">Sair</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default Profile;