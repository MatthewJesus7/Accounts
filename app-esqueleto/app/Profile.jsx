import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { saveUserData, getUserData, signOutUser } from '../config/authService';
import CustomAlert from '../components/layout/popup/CustomAlert';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    birthdate: '',
    createdAt: '',
    profileImage: '',
    bannerImage: '',
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Carrega os dados do usuário
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        if (data) {
          setUserData({
            name: data.name || 'Nome do Usuário',
            birthdate: data.birthdate || '01/01/2000',
            createdAt: data.createdAt,
            profileImage: data.profileImage || 'https://via.placeholder.com/150',
            bannerImage: data.bannerImage || 'https://via.placeholder.com/300x100',
          });
        } else {
          setAlertMessage('Nenhum dado encontrado.');
          setAlertVisible(true);
        }
      } catch (error) {
        setAlertMessage('Erro ao buscar dados: ' + error.message);
        setAlertVisible(true);
        navigation.navigate('Login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      await saveUserData(userData);
      setAlertMessage('Dados salvos com sucesso!');
      setAlertVisible(true);
    } catch (error) {
      setAlertMessage('Erro ao salvar os dados: ' + error.message);
      setAlertVisible(true);
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

  const uploadImageToFirebase = async (uri) => {
    const storage = getStorage();
    const response = await fetch(uri);
    const blob = await response.blob();
    const imageRef = ref(storage, 'images/' + new Date().toISOString() + '.png');
  
    await uploadBytes(imageRef, blob);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  };

  const pickImage = async (imageType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      try {
        const downloadURL = await uploadImageToFirebase(imageUri);
        setUserData((prevData) => ({
          ...prevData,
          [imageType]: downloadURL,
        }));
      } catch (error) {
        setAlertMessage('Erro ao fazer upload da imagem: ' + error.message);
        setAlertVisible(true);
      }
  };
};

  const handleLogout = async () => {
    try {
      await signOutUser();
      setAlertMessage('Logout realizado com sucesso!');
      setAlertVisible(true);
      navigation.navigate('Login');
    } catch (error) {
      setAlertMessage('Erro ao realizar logout: ' + error.message);
      setAlertVisible(true);
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
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
            className={`relative -top-10 left-0 w-[100vw] h-44`}
            onPress={() => isEditing && pickImage('bannerImage')}
            activeOpacity={!isEditing && 1}
          >
            <Image
              source={{ uri: userData.bannerImage || 'https://via.placeholder.com/300x100' }}
              style={{ width: '100%', height: '100%' }}
            />
          </TouchableOpacity>

          {/* Imagem de perfil editável */}
          <TouchableOpacity 
          onPress={() => isEditing && pickImage('profileImage')}
          activeOpacity={!isEditing && 1}
          >
            <Image
              source={{ uri: userData.profileImage || 'https://via.placeholder.com/150' }}
              className={`w-32 h-32 rounded-full mb-4 shadow-lg -mt-24`}
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

          {
            isEditing ? (
              <View className="w-full max-w-md bg-white rounded-lg p-6 shadow-md space-y-4">
              <TextInput
                className="border-b border-gray-300 mb-4 p-2"
                placeholder="Nome"
                value={userData.name}
                onChangeText={(text) => setUserData({ ...userData, name: text })}
              />
              </View>
            ) : (
            <Text className="text-2xl font-bold mb-6">{userData.name}</Text>
            )}

          {/* Dados do usuário */}
          <View className="w-full max-w-md bg-white rounded-lg p-6 shadow-md space-y-4">
            <Text className="text-lg font-semibold text-gray-700">Dados Pessoais</Text>
            {/* Campos de dados omitidos para brevidade */}
            <TouchableOpacity
              className="px-4 py-2 bg-red-500 rounded-full mb-4"
              onPress={handleLogout}
            >
              <Text className="text-white font-semibold">Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={closeAlert}
      />
    </View>
  );
};

export default Profile;