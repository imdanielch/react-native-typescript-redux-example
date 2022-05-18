import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import { CounterView } from './CounterView';

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, onChangeIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  const childToParent = (value: string) => {
    onChangeIncrementAmount(value);
  };

  return (
    <CounterView
      count={count}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      incrementByAmount={() => dispatch(incrementByAmount(incrementValue))}
      incrementAsync={() => dispatch(incrementAsync(incrementValue))}
      incrementIfOdd={() => dispatch(incrementIfOdd(incrementValue))}
      childToParent={() => childToParent}
      incrementAmount={incrementAmount}
    />
  );
};
