import React from 'react';
import {View, Text} from 'react-native';

export interface ResultProps {
  number: number;
}

export const Result: React.FC<ResultProps> = ({number}) => {
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 70, color: 'white', textAlign: 'right'}}>{number}</Text>
    </View>
  );
};
