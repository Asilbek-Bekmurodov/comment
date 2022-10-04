import React from "react";
export function useUndo(initialPresent) {
  const [past, setPast] = React.useState([]);
  const [present, setPresent] = React.useState(initialPresent);
  const [future, setFuture] = React.useState([]);

  const canUndo = past.length !== 0;
  const canRedo = future.length !== 0;

  const undo = React.useCallback(() => {
    if (!canUndo) return;

    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    setPast(newPast);
    setPresent(previous);
    setFuture([present, ...future]);
  }, [canUndo, future, past, present]);

  const redo = React.useCallback(() => {
    if (!canRedo) return;

    const next = future[0];
    const newFuture = future.slice(1);

    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture);
  }, [canRedo, future, past, present]);

  const set = React.useCallback(
    (newPresent) => {
      if (newPresent === present) {
        return;
      }
      setPast([...past, present]);
      setPresent(newPresent);
      setFuture([]);
    },
    [past, present]
  );

  const reset = React.useCallback((newPresent) => {
    setPast([]);
    setPresent(newPresent);
    setFuture([]);
  }, []);

  return [
    { past, present, future },
    { set, reset, undo, redo, canUndo, canRedo },
  ];
}
