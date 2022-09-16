import { useState, useEffect } from "react";

function getStorageData(key) {
  return localStorage.getItem(key);
}

export function useStateStorage(key, initValue) {
  const [state, setState] = useState(() => initValue || getStorageData(key));

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}
