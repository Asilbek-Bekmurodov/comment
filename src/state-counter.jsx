import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>State Counter: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
