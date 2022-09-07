import { createContext } from "react";
import { Mode, Profile } from "../app";

export interface IContextValue {
  mode: Mode;
  profile: Profile;
  onChangeMode: (mode: Mode) => void;
}

export const SuperContext = createContext<IContextValue>(null as any);
