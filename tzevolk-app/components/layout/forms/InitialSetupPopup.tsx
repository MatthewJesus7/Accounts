import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import EmptyPopup from './EmptyPopup';

interface InitialSetupPopupProps {
  visible: boolean;
  onClose: () => void;
  onSave: (balance: string, payday: string) => void;
}

const InitialSetupPopup: React.FC<InitialSetupPopupProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [step, setStep] = useState<number>(1);
  const [balance, setBalance] = useState<string>('');
  const [payday, setPayday] = useState<string>('1');

  const handleNext = () => {
    if (step === 1) {
      // Avança para o passo de seleção da data
      setStep(2);
    } else {
      // No segundo passo, salva os dados
      onSave(balance, payday);
      // Reseta o fluxo para uma eventual reabertura
      setStep(1);
      setBalance('');
      setPayday('1');
    }
  };

  const handleClose = () => {
    // Reseta estados ao fechar
    setStep(1);
    setBalance('');
    setPayday('1');
    onClose();
  };

  return (
    <EmptyPopup visible={visible} onClose={handleClose}>
      {step === 1 ? (
        <View>
          <Text className="text-xl mb-4">Qual seu saldo?</Text>
          <TextInput
            className="border border-gray-400 p-2 mb-4"
            value={balance}
            onChangeText={setBalance}
            placeholder="Ex: 10.000,00"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleNext} className="bg-blue-500 p-2 rounded">
            <Text className="text-white text-center">Próximo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text className="text-xl mb-4">Que data você recebe?</Text>
          <Picker
            selectedValue={payday}
            onValueChange={(itemValue) => setPayday(itemValue)}
            style={{ marginBottom: 16 }}
          >
            {Array.from({ length: 31 }, (_, i) => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Picker>
          <TouchableOpacity onPress={handleNext} className="bg-green-500 p-2 rounded">
            <Text className="text-white text-center">Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </EmptyPopup>
  );
};

export default InitialSetupPopup;
