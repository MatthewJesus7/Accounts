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

// Função para registrar um novo usuário
export const signUp = async (email, password, handleError) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    return userCredential;
  } catch (error) {
    if (handleError) handleError(error);
  }
};

// Função para login com tratamento de erros
export const loginWithEmail = async (email, password, handleError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (handleError) handleError(error);
  }
};

// Função para verificar se o email do usuário foi verificado
export const checkEmailVerification = (user) => {
  if (user && user.emailVerified !== undefined) {
    return user.emailVerified;
  }
  return false;
};

export const getUserToken = async (user) => {
  if (user && typeof user.getIdToken === "function") {
    try {
      return await user.getIdToken();
    } catch (error) {
      console.error("Erro ao obter token:", error);
      return null;
    }
  }
  console.warn("Usuário não autenticado ou inválido.");
  return null;
};


// Função para observar o estado do usuário
export const observeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => callback(user));
};

// Exportando funções e objetos
export { auth, database, sendEmailVerification }; // Adiciona sendEmailVerification aqui
