// LoadingScreen.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NomeDoApp</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      
    </View>
  );
}
