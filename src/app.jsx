import React from "react";
import { useUndo } from "use-undo";

let counter = 1;
const App = () => {
  const [state, { dispatch, canReset, canUndo, canRedo }] = useUndo(
    `Lesson-${counter}`
  );

  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <button
        onClick={() =>
          dispatch({ type: "SET", payload: `Lesson-${++counter}` })
        }>
        Increment
      </button>
      <button disabled={!canUndo} onClick={() => dispatch({ type: "UNDO" })}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={() => dispatch({ type: "REDO" })}>
        Redo
      </button>
      <button disabled={!canReset} onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  );
};

export default App;
