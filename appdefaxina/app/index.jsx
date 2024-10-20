// App.js
import React from 'react';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

// Defina a saída do NativeWind
NativeWindStyleSheet.setOutput({
  default: "native",
});

import MyComponent from '../components/MyComponent';

const App = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold">
        Hello, NativeWind!
      </Text>

      <MyComponent></MyComponent>

    </View>
  );
};

export default App;
