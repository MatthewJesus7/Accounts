import { View, Text, TouchableOpacity } from 'react-native';
import Section from '../../layout/Section';

const Balance = () => {
  return (
    <View>
      <Section customclass="flex flex-row gap-2vw">
        
        <View>
          <Text className="text-gray-400 font-semibold">Saldo Atual</Text>
          <Text className="text-green-500 text-2xl font-bold">$1,250.00</Text>
          <Text className="text-gray-400 text-sm">
            Próximo dia previsto para receber: Dia 30
        </Text>
        </View>

        <View className="flex flex-col justify-around">

          <TouchableOpacity className="px-4 py-2 rounded-full flex items-center bg-gray-100">

            <Text className="text-gray-500 font-semibold">editar</Text>
          </TouchableOpacity>

          <TouchableOpacity className="px-4 py-2 rounded-full flex items-center bg-gray-100">

            <Text className="text-gray-500 font-semibold">adicionar</Text>
          </TouchableOpacity>
        </View>

      </Section>

      <Section>
        
      </Section>
    </View>
  );
};

export default Balance;