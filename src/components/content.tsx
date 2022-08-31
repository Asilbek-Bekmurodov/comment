import { FC } from "react";
import { Mode } from "../App";
import UserData from "./user-data";

interface ContentProps {
  onChangeMode: (mode: Mode) => void;
}

const Content: FC<ContentProps> = ({ onChangeMode }) => (
  <div className='container pt-4'>
    <UserData />
    <button
      className='btn btn-outline-dark btn-sm'
      onClick={() => onChangeMode("dark")}>
      Dark Mode
    </button>
    <button
      className='btn btn-outline-warning btn-sm ms-2'
      onClick={() => onChangeMode("light")}>
      Light Mode
    </button>
  </div>
);

export default Content;
