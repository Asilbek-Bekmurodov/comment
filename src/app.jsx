import React from "react";

let counter = 1;
const App = () => {
  const [state, setState] = React.useState({
    present: [],
    past: [],
    future: [],
  });

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;
  const canReset = Boolean(
    state.future.length || state.past.length || state.present.length
  );

  const onIncrement = () => {
    setState((prev) => ({
      ...prev,
      present: [counter++],
      past: [...prev.past, ...prev.present],
    }));
  };

  const onUndo = () =>
    setState((prev) => {
      const future = [...prev.future, ...prev.present];
      const past = [...prev.past];
      const last = past.pop();

      const present = last ? [last] : [];

      return { future, past, present };
    });

  const onRedo = () =>
    setState((prev) => {
      const future = [...prev.future];
      const last = future.pop();

      const present = [last];
      const past = [...prev.past, ...prev.present];

      return { future, past, present };
    });

  const onReset = () => setState({ present: [], past: [], future: [] });

  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <button onClick={onIncrement}>Increment</button>
      <button disabled={!canUndo} onClick={onUndo}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={onRedo}>
        Redo
      </button>
      <button disabled={!canReset} onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default App;
