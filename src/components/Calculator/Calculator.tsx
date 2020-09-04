import React, {useState} from 'react';
import {View} from 'react-native';
import {Number} from '../Number/number';
import {Result} from '../Result/result';
import {style} from './CalculatorStyle';
import {NumberNull} from '../Number/numberNull';

let arr: number[] = [];
export const Calculator = () => {
  const [state, setState] = useState(0);
  const [res, setRes] = useState<number>(0);
  const [actions, setActions] = useState<string>('');

  function action(action: string, res: number, state: number) {
    switch (action) {
      case '/':
        arr.unshift(res);
        arr.unshift(state);
        if (arr.length === 2) {
          setState(arr[1] / arr[0]);
        } else setState(arr[0] / arr[arr.length - 2]);
        break;
      case '*':
        arr.unshift(res);
        arr.unshift(state);
        if (arr.length === 2) {
          setState(arr[1] * arr[0]);
        } else setState(arr[0] * arr[arr.length - 2]);

        break;
      case '+':
        arr.unshift(res);
        arr.unshift(state);
        if (arr.length === 2) {
          setState(arr[1] + arr[0]);
        } else setState(arr[0] + arr[arr.length - 2]);

        break;
      case '-':
        arr.unshift(res);
        arr.unshift(state);
        if (arr.length === 2) {
          setState(arr[1] - arr[0]);
        } else setState(arr[0] - arr[arr.length - 2]);
        break;
      case '%':
        arr.unshift(res);
        arr.unshift(state);
        if (arr.length === 2) {
          setState(arr[1] % arr[0]);
        } else setState(arr[0] % arr[arr.length - 2]);
        break;
    }
  }

  return (
    <View style={style.main}>
      {/* @ts-ignore */}
      <View style={style.display}>
        <Result number={state} />
      </View>
      <View>
        {/* @ts-ignore */}
        <View style={style.number}>
          <Number
            onPress={() => {
              setState(0);
              setRes(0);
              arr = [];
            }}
            title="AC"
            color="silver"
          />
          <Number
            onPress={() => {
              setState(-state);
              arr = [];
            }}
            title="+/-"
            color="silver"
          />
          <Number
            onPress={() => {
              setRes(state);
              arr = [];

              setState(0);
              setActions('%');
            }}
            title="%"
            color="silver"
          />
          <Number
            onPress={() => {
              setRes(state);
              arr = [];

              setState(0);
              setActions('/');
            }}
            title="/"
            color="#FFC01E"
          />
        </View>
        {/* @ts-ignore */}
        <View style={style.number}>
          <Number
            onPress={() => {
              setState(+`${state}7`);
            }}
            title="7"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}8`);
            }}
            title="8"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}9`);
            }}
            title="9"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setRes(state);
              setState(0);
              arr = [];

              setActions('*');
            }}
            title="x"
            color="#FFC01E"
          />
        </View>
        {/* @ts-ignore */}
        <View style={style.number}>
          <Number
            onPress={() => {
              setState(+`${state}4`);
            }}
            title="4"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}5`);
            }}
            title="5"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}6`);
            }}
            title="6"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setRes(state);
              setState(0);
              arr = [];
              setActions('-');
            }}
            title="-"
            color="#FFC01E"
          />
        </View>
        {/* @ts-ignore */}
        <View style={style.number}>
          <Number
            onPress={() => {
              setState(+`${state}1`);
            }}
            title="1"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}2`);
            }}
            title="2"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setState(+`${state}3`);
            }}
            title="3"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setActions('+');
              setRes(state);
              setState(0);
            }}
            title="+"
            color="#FFC01E"
          />
        </View>
        {/* @ts-ignore */}

        <View style={style.number}>
          <NumberNull
            onPress={() => {
              setState(+`${state}0`);
            }}
            title="0"
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              // @ts-ignore
              setState(`${state}.`);
            }}
            title=","
            color="#4B4B4A"
          />
          <Number
            onPress={() => {
              setRes(res);
              action(actions, res, state);
            }}
            title="="
            color="#FFC01E"
          />
        </View>
      </View>
    </View>
  );
};
