import React from "react";

const reducer = (state, action) => {
  console.log("action = ", action);

  if (typeof action === "function") {
    return action(state);
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT": {
      if (state <= 0) return state;
      return state - 1;
    }
    default:
  }
};

const Counter = () => {
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <h1>Reducer Counter: {count}</h1>
      <button
        onClick={() =>
          dispatch((state) => reducer(state, { type: "INCREMENT" }))
        }>
        Increment
      </button>
      <button onClick={() => dispatch((count) => count - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
