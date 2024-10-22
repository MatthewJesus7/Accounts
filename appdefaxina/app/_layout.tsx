// RootLayout.js
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import LoadingScreen from './Loading'; // ajuste o caminho conforme necessário

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Defina como false ou true conforme seu estado inicial
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Simule uma verificação de autenticação (por exemplo, API, AsyncStorage, etc.)
      // Aqui você deve adicionar a lógica real para verificar a autenticação do usuário.
      // Por exemplo, você pode usar AsyncStorage para verificar um token.

      // Simulando um tempo de carregamento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Decida se o usuário está autenticado ou não
      // Exemplo: se (token) setIsAuthenticated(true);
      // Aqui, você pode definir isAuthenticated de acordo com a lógica real
      const value = true
      setIsAuthenticated(value); // Altere isso com base na lógica de autenticação
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Mostra a tela de carregamento
  }

  return (
    <Stack>
      {/* altere entre ! e sem para definir a logica */}
      {isAuthenticated === true ? (
        // Tela principal do aplicativo
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'Home', 
            headerBackTitle: 'Voltar',
          }}
        />
      ) : (
        // Tela de login
        <Stack.Screen
          name="Login"
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'Entrar',
            headerBackTitle: 'Voltar',
          }}
        />
      )}

      <Stack.Screen
          name="Register"
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'Registrar-se',
            headerBackTitle: 'Voltar',
          }}
        />
    </Stack>
  );
}
