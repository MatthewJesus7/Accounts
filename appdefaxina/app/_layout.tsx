import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import LoadingScreen from './Loading'; // ajuste o caminho conforme necessário

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Aceita true, false ou null

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula o tempo de carregamento

      // Lógica para verificar a autenticação
      const token = localStorage.getItem('userToken'); // Exemplo com Local Storage
      setIsAuthenticated(token ? true : false); // Atualiza o estado com base no token
      setIsLoading(false); // Atualiza o estado de loading
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Mostra a tela de carregamento
  }

  return (
    <Stack>
      {isAuthenticated === null ? (
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
