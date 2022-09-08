import { useState, useEffect, Dispatch, SetStateAction } from "react";

function getStorageData(key: string) {
  return localStorage.getItem(key);
}

export function useStateStorage(
  key: string,
  initValue: string
): [string, Dispatch<SetStateAction<string>>] {
  const [state, setState] = useState<string>(
    () => initValue || getStorageData(key)!
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}
