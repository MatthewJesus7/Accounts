import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../components/input/Input';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../config/firebaseConfig'; // Mantenha a importação da função signIn
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

const auth = getAuth();

// Função para verificar se o usuário existe
export const checkUserExists = async (email) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    // Se a lista de métodos de login não estiver vazia, o usuário existe
    return signInMethods.length > 0;
  } catch (error) {
    console.error("Erro ao verificar se o usuário existe:", error);
    return false; // Retorna falso em caso de erro
  }
};

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // Validação básica
    if (!email || !password) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return;
    }

    setErrorMessage(''); // Limpa mensagens de erro

    try {
      // Verifica se o usuário existe
      const userExists = await checkUserExists(email);
      if (!userExists) {
        setErrorMessage('Usuário não encontrado. Faça o registro antes de fazer login.');
        return;
      }

      // Se o usuário existir, tenta fazer login
      await signIn(email, password); // Chama a função signIn com email e senha
      navigation.navigate('index'); // Navega para a tela inicial após o login
    } catch (error) {
      setErrorMessage(error.message); // Exibe erro no campo
    }
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
        onPress={handleLogin}
        disabled={!email || !password}
      >
        <Text className="text-white text-center font-semibold">Entrar</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center mt-4">
        <Text className="pr-2">Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-blue-500 underline">Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
