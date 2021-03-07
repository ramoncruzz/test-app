import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../Text';
import { styleByType } from './index.styles';
type props = {
  title: string;
  type?: 'primary' | 'secundary';
  onPress: () => void;
  style?: any;
};

const Button: React.FC<props> = ({
  title,
  onPress,
  type = 'primary',
  style,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styleByType[type].style, style]}
      onPress={onPress}
    >
      <Text color={styleByType[type].colorText} size={20} fontWeight="700">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
