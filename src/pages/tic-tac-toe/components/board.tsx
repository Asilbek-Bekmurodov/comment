import { FC } from "react";

import cls from "../style.module.scss";
import { BoardProps } from "./types";

const Board: FC<BoardProps> = ({ squares, onSelect }) => {
  return (
    <div className={cls.squares}>
      {squares.map((square, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={cls.square}
          disabled={Boolean(square)}>
          {square}
        </button>
      ))}
    </div>
  );
};
export default Board;
