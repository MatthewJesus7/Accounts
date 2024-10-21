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
    <View>

      {/* <MyComponent></MyComponent> */}

    </View>
  );
};

export default App;
