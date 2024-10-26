// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail as checkSignInMethods,
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

// Função para registrar um novo usuário
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Função para login com tratamento de erros
export const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Lida com os erros de forma centralizada
    let errorMessage = '';

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'Usuário não encontrado. Verifique se o email está correto ou registre-se.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Senha incorreta. Tente novamente.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Formato de email inválido. Corrija e tente novamente.';
        break;
      default:
        errorMessage = 'Erro ao fazer login: ' + error.message;
    }
    throw new Error(errorMessage); // Lança o erro para ser capturado no componente
  }
};

// Função para verificar se o usuário já existe
export const checkUserExists = async (email) => {
  try {
    const signInMethods = await checkSignInMethods(auth, email);
    return signInMethods.length > 0;
  } catch (error) {
    console.error("Erro ao verificar se o usuário existe:", error);
    return false;
  }
};

// Função para observar o estado do usuário
export const observeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => callback(user));
};

// Exportando auth e database
export { auth, database };
