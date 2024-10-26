// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail as checkSignInMethods,
  sendEmailVerification, // Importação necessária
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.FIREBASE_API_KEY,
  authDomain: Constants.expoConfig.extra.FIREBASE_AUTH_DOMAIN,
  databaseURL: Constants.expoConfig.extra.FIREBASE_DATABASE_URL,
  projectId: Constants.expoConfig.extra.FIREBASE_PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.FIREBASE_APP_ID,
  measurementId: Constants.expoConfig.extra.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Função para tratar erros do Firebase
const handleFirebaseErrorLogin = (error) => {
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

  throw new Error(errorMessage); 
};
  

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

  throw new Error(errorMessage); // Lança o erro para ser capturado no componente
};

// Função para registrar um novo usuário
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user); // Envia e-mail de verificação
    return userCredential; // Retorna as credenciais do usuário
  } catch (error) {
    handleFirebaseErrorRegister(error);
  }
};

// Função para login com tratamento de erros
export const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handleFirebaseErrorLogin(error);
  }
};

// Função para verificar se o email do usuário foi verificado
export const checkEmailVerification = (user) => {
  if (user) {
    return user.emailVerified; // Retorna o status de verificação
  }
  return false; // Retorna false se não houver usuário
};

// Função para observar o estado do usuário
export const observeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => callback(user));
};

// Exportando funções e objetos
export { auth, database, sendEmailVerification }; // Adiciona sendEmailVerification aqui
