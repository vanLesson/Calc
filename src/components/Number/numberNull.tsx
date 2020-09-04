import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export interface NumberProps {
  onPress: () => void;
  color: string;
  title: string;
}

export const NumberNull: React.FC<NumberProps> = ({onPress, color, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 182,
        height: 90,
        borderRadius: 70,
        backgroundColor: `${color}`,
      }}
    >
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};
