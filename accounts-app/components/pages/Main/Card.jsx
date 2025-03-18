import { View, Text } from 'react-native';
import Section from '../../layout/Section';

const Card = ({ title, cost }) => {
  return (
    <View className="bg-white rounded-md">
      <View className="flex flex-row justify-between">

        <Section>
          <Text className="text-gray-700 text-lg font-semibold max-w-[68vw] text-nowrap truncate ">
            {title}
          </Text>
        </Section>

        <Section customclass="flex">

          <View className="bg-gray-50 rounded-lg flex p-4 border border-gray-300">
            <Text className='font-semibold text-xl text-gray-950'>
              ${cost}
            </Text> 
          </View>

        </Section>

      </View>
    </View>
  );
};

export default Card;
