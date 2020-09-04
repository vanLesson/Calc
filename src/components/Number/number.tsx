import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export interface NumberProps {
  onPress: () => void;
  color: string;
  title: string;
}

export const Number: React.FC<NumberProps> = ({onPress, color, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 90,
        height: 90,
        borderRadius: 70 * 2,
        backgroundColor: `${color}`,
      }}
    >
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};
