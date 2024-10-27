import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true); // Inicia o loading

      // Simula uma verificação de autenticação com um delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Lógica para verificar a autenticação
      // const token = localStorage.getItem("userToken"); // Exemplo com Local Storage
      
      setIsAuthenticated(false); // Define se o usuário está autenticado com base no token

      setIsLoading(false); // Finaliza o loading
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack>
      <Stack.Screen
        name={isAuthenticated ? "index" : "Login"}
        options={{
          headerStyle: {
            backgroundColor: "#F3F4F6",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: isAuthenticated ? "Home" : "Entrar",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerStyle: {
            backgroundColor: "#F3F4F6",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Registrar-se",
          headerBackTitle: "Voltar",
        }}
      />
            <Stack.Screen
        name="PrivacyPolicy"
        options={{
          headerStyle: {
            backgroundColor: "#F3F4F6",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Registrar-se",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="TermsOfUse"
        options={{
          headerStyle: {
            backgroundColor: "#F3F4F6",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Registrar-se",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          headerStyle: {
            backgroundColor: "#F3F4F6",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Registrar-se",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
    
  );
}
