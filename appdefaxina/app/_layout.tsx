import { Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";
import BottomBar from "../components/layout/bottombar/BottomBar";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname(); // Obter o caminho completo da tela atual

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsAuthenticated(false); // Exemplo de lógica de autenticação
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Lista de telas onde o BottomBar deve aparecer
  const screensWithBottomBar = ["/", "/Profile", "/Home"];
  const shouldShowBottomBar = screensWithBottomBar.includes(pathname);

  // console.log("Current Pathname:", pathname);

  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen 
          name={isAuthenticated ? "index" : "Login"} 
        />
        <Stack.Screen name="Register" />
        <Stack.Screen name="PrivacyPolicy" />
        <Stack.Screen name="TermsOfUse" />
        <Stack.Screen name="ForgotPassword" />
        <Stack.Screen name="Profile" />
      </Stack>
      
      {shouldShowBottomBar && <BottomBar />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
