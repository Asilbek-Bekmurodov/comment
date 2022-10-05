import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UNDO": {
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, state.past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    }
    case "REDO": {
      const next = state.future[0];
      const newFuture = state.future.slice(1);

      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    }
    case "SET": {
      return {
        past: [...state.past, state.present],
        present: action.payload,
        future: [],
      };
    }
    case "RESET":
      return { past: [], present: [], future: [] };
    default:
  }
};

export function useUndo(initialPresent) {
  const [state, dispatch] = React.useReducer(reducer, {
    past: [],
    present: initialPresent,
    future: [],
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  const canReset = Boolean(
    state.future.length || state.present.length || state.past.length
  );

  return [state, { dispatch, canUndo, canRedo, canReset }];
}
