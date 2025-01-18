import { Text, View } from 'react-native';
import { useSession } from '../../ctx';

export default function Index() {
  const { signOut } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App interno (apenas autenticado)</Text>
      <Text onPress={signOut}>Sign Out</Text>
    </View>
  );
}
