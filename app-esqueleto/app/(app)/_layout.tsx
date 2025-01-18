import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../ctx';
import Loading from '../../components/layout/animations/Loading'

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loading/>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
