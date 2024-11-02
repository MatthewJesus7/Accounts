import { auth, database } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { ref, set, get, remove } from "firebase/database";

// Função para registrar um novo usuário
export const signUp = async (email, password, handleError) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(user);

    return userCredential;
  } catch (error) {
    if (handleError) handleError(error);
    console.error("Erro no cadastro:", error);
    return null;
  }
};

export const saveTempUserName = async (userId, name) => {
  try {
    const tempUserRef = ref(database, 'tempUsuarios/' + userId);
    await set(tempUserRef, { name: name });
    console.log("Nome do usuário salvo temporariamente com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar nome do usuário:", error);
  }
};

export const moveUserData = async (userId) => {
  try {
    const tempUserRef = ref(database, 'tempUsuarios/' + userId);
    const snapshot = await get(tempUserRef);

    if (snapshot.exists()) {
      const userData = snapshot.val();

      // Salva os dados na coleção principal
      const mainUserRef = ref(database, 'usuarios/' + userId);
      await set(mainUserRef, userData);

      // Remove os dados da coleção temporária
      await remove(tempUserRef);
      console.log("Nome do usuário movido com sucesso para a coleção principal!");
    } else {
      console.log("Dados do usuário não encontrados na coleção temporária.");
    }
  } catch (error) {
    console.error("Erro ao mover dados do usuário:", error);
  }
};

// Função para login com tratamento de erros
export const loginWithEmail = async (email, password, handleError) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      throw new Error("Por favor, verifique seu e-mail antes de fazer login.");
    }

    const userData = await getUserData();

    if (!userData || !userData.name) {
      const name = localStorage.getItem("tempUserName");
      if (name) {
        await saveUserData({ name });
        localStorage.removeItem("tempUserName");
      }
    }

    return userCredential;
  } catch (error) {
    if (handleError) handleError(error);
  }
};

// Função para desconectar o usuário autenticado
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("Usuário desconectado com sucesso.");
  } catch (error) {
    console.error("Erro ao desconectar: ", error.message);
    throw error;
  }
};

// Função para verificar se o email do usuário foi verificado
export const checkEmailVerification = async (user) => {
  if (user && user.emailVerified !== undefined) {
    await user.reload();
    return user.emailVerified;
  }
  return false;
};

// Função para obter o token do usuário autenticado
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

// Função para salvar dados do usuário
export const saveUserData = async (data) => {
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    await set(ref(database, 'usuarios/' + userId), data);
  } else {
    throw new Error("Usuário não autenticado.");
  }
};

// Função para buscar dados do usuário
export const getUserData = async () => {
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const snapshot = await get(ref(database, 'usuarios/' + userId));
    return snapshot.exists() ? snapshot.val() : null;
  } else {
    throw new Error("Usuário não autenticado.");
  }
};

// Função para observar o estado de autenticação do usuário (novo)
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { sendEmailVerification };