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
      <View className="-mr-[12px]">
        <View className="rounded-full -mb-[52px] ml-[11px] w-12 h-14 bg-red-500 rotate-45"></View>
        <View className="rounded-full -mb-6 -ml-[23px] w-14 h-12 bg-red-500 rotate-45"></View>
        <View className="w-10 h-10 bg-red-500 rotate-45"></View>
      </View>
      <Text className="text-2xl mt-5 bg-red-500 font-bold px-2 rounded-lg">
        te amo Shakira
      </Text>

      <Text className="font-bold">
        Amor da minha vida
      </Text>

      {/* <MyComponent></MyComponent> */}

    </View>
  );
};

export default App;
