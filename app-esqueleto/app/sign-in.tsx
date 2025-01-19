import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSession } from '../ctx';

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View className="flex items-center justify-center h-screen">
      <Text>App externo (todos tem acesso)</Text>
      <Text
        onPress={() => {
          signIn();
          router.replace('/');
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
