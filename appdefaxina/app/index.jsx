// App.js
import React from 'react';
import { View, Text } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: "native",
});

import BottomBar from "../components/layout/bottombar/BottomBar"

const App = () => {
  return (
    <View 
    className="flex h-full">
      <Text className="font-bold text-2xl text-center">Ai, ta pegando</Text>
    </View>
  );
};

export default App;
