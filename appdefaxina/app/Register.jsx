import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/input/Input';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../config/firebaseConfig';
import { validateEmail, checkPasswordStrength } from '../utils/validationUtils';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFirebaseErrorRegister = (error) => {
    let errorMessage = '';

    switch (error.code) {
      // Erros de Registro
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
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Todos os campos são obrigatórios!');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('A senha deve ter pelo menos 8 caracteres!');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem!');
      return;
    }

    if (!termsAccepted) {
      setErrorMessage('Você deve aceitar os termos de uso e a política de privacidade.');
      return;
    }

    // Limpar mensagens de erro antes de iniciar o registro
    setErrorMessage('');

    try {    
      // Enviar email para o Firebase após a verificação
      await signUp(email, password, handleFirebaseErrorRegister);
      Alert.alert("Registro concluído", "Verifique seu email para ativar sua conta.");
      navigation.navigate('Login');
    } catch (error) {
      handleFirebaseErrorRegister(error);
    }
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);
  };

  return (
    <View className="flex-1 justify-center px-6 max-w-md w-[100%] mx-auto bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-8">Cadastro</Text>

      <Input
        label="Nome"
        placeholder="Digite seu nome completo"
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

      <View className="relative">
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute right-3 top-[43%]"
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {password ? (
        <Text className={`text-sm mt-1 ${passwordStrength === 'Forte' ? 'text-green-500' : 'text-red-500'}`}>
          Força da senha: {passwordStrength}
        </Text>
      ) : null}

      <View className="relative">
        <Input
          label="Confirme sua senha"
          placeholder="Confirme sua senha"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          className="absolute right-3 top-[43%]"
        >
          <Ionicons
            name={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {errorMessage ? (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      ) : null}

      <View className="flex-row items-center mt-4">
        <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
          <Ionicons
            name={termsAccepted ? "checkbox" : "checkbox-outline"}
            size={24}
            color="blue"
          />
        </TouchableOpacity >

        <Text className="ml-2">
          Aceito os 
          <TouchableOpacity onPress={() => navigation.navigate('TermsOfUse')}
          className="px-1.5"
          >
            <Text className="text-blue-500 underline">
              termos de uso
            </Text>
          </TouchableOpacity>
           e a 
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}
          className="px-1.5"
          >
            <Text className="text-blue-500 underline">
              política de privacidade
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      <TouchableOpacity
        className={`p-4 rounded-lg mt-6 bg-blue-500`}
        onPress={handleRegister}
      >
        <Text className="text-white text-center font-semibold">Cadastrar</Text>
      </TouchableOpacity>

      <View className="flex items-center flex-row mt-4">
        <Text className="pr-2">Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-blue-500 underline">Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
