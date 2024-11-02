import { Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";
import BottomBar from "../components/layout/bottombar/BottomBar";
import { View, StyleSheet } from "react-native";
import { onAuthStateChangedListener } from '../config/authService';
import { User } from "firebase/auth";


export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);

      const unsubscribe = onAuthStateChangedListener((user: User | null) => {
        setIsLoading(false);
        setIsAuthenticated(!!user);
      });

      return () => unsubscribe();
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
          options={
            isAuthenticated
              ? { headerLeft: () => null }
              : { header: () => null }
          }
        />
        <Stack.Screen name="Register" 
        options={{headerLeft: () => null,}} />

        <Stack.Screen name="PrivacyPolicy" 
        options={{header: () => null,}} />

        <Stack.Screen name="TermsOfUse"
        options={{header: () => null,}} />

        <Stack.Screen name="ForgotPassword"
        options={{header: () => null,}} />

        <Stack.Screen name="Profile"
          options={{headerLeft: () => null,}} />
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
