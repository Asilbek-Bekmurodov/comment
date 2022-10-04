import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT": {
      if (state.count <= 0) return state;
      return { count: state.count - 1 };
    }
    default:
  }
};

const Counter = () => {
  const [state, setState] = React.useState({ count: 0 });

  const dispatch = (action) => setState(reducer(state, action));

  return (
    <>
      <h1>Count {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};

export default Counter;
