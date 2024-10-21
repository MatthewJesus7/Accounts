// App.js
import React from 'react';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

// Defina a saída do NativeWind
NativeWindStyleSheet.setOutput({
  default: "native",
});

import FullSidebar from '../components/layout/FullSidebar';

const App = () => {
  return (
    <View>
      <FullSidebar></FullSidebar>
    </View>
  );
};

export default App;
