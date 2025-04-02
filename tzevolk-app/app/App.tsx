import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, View, TextInput } from 'react-native';
import Balance from '../components/pages/Main/Balance';
import Card from '../components/pages/Main/carousel/Card';
import BottomBar from '../components/layout/bar/bottomBar/BottomBar';
import InitialSetupPopup from '../components/layout/forms/InitialSetupPopup';

export default function App() {

  return (
    <SafeAreaView className="flex-1 justify-between bg-gray-50">
      <ScrollView>
        
      </ScrollView>

      <BottomBar/>
    </SafeAreaView>
  );
}
