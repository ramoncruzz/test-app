import React from 'react';
import { View } from 'react-native';
import { styles } from './index.style';
type props = {
  flex?: number;
  style?: any;
};
const Card: React.FC<props> = ({ flex = 0, style, children }): JSX.Element => (
  <View style={[styles.main, style, { flex }]}>{children}</View>
);

export default Card;
