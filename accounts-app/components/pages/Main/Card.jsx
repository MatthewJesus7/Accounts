import { View, Text } from 'react-native';
import Section from '../../layout/Section';

const Card = ({ title, children }) => {
  return (
    <View className="bg-gray-200 rounded-md">
      <View className="flex flex-row justify-between">

        <Section>
          <Text className="text-gray-500 text-lg font-semibold">titulo</Text>
        </Section>

        <Section customclass="flex">
          <View className="bg-gray-300 rounded-lg flex p-4 border border-gray-300">
            <Text>preço</Text> 
          </View>
        </Section>

      </View>
    </View>
  );
};

export default Card;
