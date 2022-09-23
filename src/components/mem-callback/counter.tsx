import React from "react";

interface CounterProps {
  count: number;
  onIncrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ onIncrement, count }) => {
  return <button onClick={onIncrement}>{count}</button>;
};

export default Counter;
