import { View, ViewProps } from 'react-native';
import { ReactNode } from 'react';

interface SectionProps extends ViewProps {
  children: ReactNode;
  customclass?: string;
}

const Section: React.FC<SectionProps> = ({ children, customclass = '', ...props }) => {
  return (
    <View className={`p-2vw ${customclass}`} {...props}>
      {children}
    </View>
  );
};

export default Section;
