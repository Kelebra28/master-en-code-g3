import React from 'react';
import { useCounterContext } from '../../CounterContext';

const Counter = () => {
    const { counter, SetCounter } = useCounterContext();

    const increment = () => SetCounter(counter + 1);
    const decrement = () => SetCounter(counter - 1);
  
    return (
      <>
        {counter}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </>
    );
  };

export default Counter;
  