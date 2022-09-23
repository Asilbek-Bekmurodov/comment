import React, { useState } from "react";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Counter;
