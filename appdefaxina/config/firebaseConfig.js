// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Caso queira usar Realtime Database
import { getFirestore } from "firebase/firestore"; // Caso queira usar Firestore

// src/firebaseAuth.js
import { config } from "dotenv";
config(); // Carrega as variáveis de ambiente do arquivo .env

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
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

// Função para observar o estado do usuário
export const observeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// Exportando o auth e database (ou firestore, se necessário)
export { auth, database }; // ou export { auth, firestore };
