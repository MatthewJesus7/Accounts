import { Text, View } from 'react-native';
import { useSession } from '../../ctx';

export default function Index() {
  const { signOut } = useSession();

  return (
    <View className="flex items-center justify-center h-screen">
      <Text>App interno (apenas autenticado)</Text>
      <Text onPress={signOut}>Sign Out</Text>
    </View>
  );
}
