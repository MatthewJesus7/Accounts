// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  fetchSignInMethodsForEmail, // Importa a função necessária
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import Constants from 'expo-constants';

// Configuração do Firebase
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

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Para Realtime Database
// const firestore = getFirestore(app); // Para Firestore

// Função para criar um novo usuário
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Função para fazer login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

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

// Função para observar o estado do usuário
export const observeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// Exportando o auth e database (ou firestore, se necessário)
export { auth, database }; // ou export { auth, firestore };
