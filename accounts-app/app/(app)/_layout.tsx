import React from 'react';
import { View } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../ctx';

import Loading from '../../components/layout/animations/Loading';
import BottomBar from '../../components/layout/bar/bottomBar/BottomBar';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <Stack />
      <BottomBar />
    </>
  );
}
