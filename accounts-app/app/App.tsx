import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSession } from '../ctx';

// @ts-ignore
import Section from '../components/layout/Section';
import Balance from '../components/pages/Main/Balance';
import Card from '../components/pages/Main/Card'
import BottomBar from '../components/layout/bar/bottomBar/BottomBar';

export default function App() {
  const { signIn } = useSession();

  return (
    <View className='flex-1 justify-between h-[100vh] bg-gray-50'>
      <View>
          <Balance></Balance>
          <Card></Card>
      </View>

      <BottomBar/>
    </View>
  );
}

{/* <TouchableOpacity
  onPress={() => {
    signIn();
    router.replace('/');
  }}
>
  Sign In
</TouchableOpacity> */}