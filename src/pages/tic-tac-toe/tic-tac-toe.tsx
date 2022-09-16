import { useLocalStorage } from "hooks/use-local-storage";
import { FC } from "react";
import Board from "./components/board";
import History from "./components/history";
import cls from "./style.module.scss";

export interface TicTacToeProps {}

const TicTacToe: FC<TicTacToeProps> = () => {
  const winner = "";
  const [histories, setHistories] = useLocalStorage("histories", [
    Array(9).fill(""),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorage("step", 0);

  const squares = histories[currentStep];
  let nextPlayer = histories.length % 2 === 1 ? "X" : "O";

  const handleSelect = (idx: number) => {
    const newSquares = [...squares];
    newSquares[idx] = nextPlayer;

    const newHistories = histories.slice(0, currentStep + 1);
    setHistories([...newHistories, newSquares]);
    setCurrentStep((prev: any) => prev + 1);
  };

  const handleRestart = () => {
    setHistories([Array(9).fill("")]);
    setCurrentStep(0);
  };

  return (
    <div className={cls.game}>
      <div className={cls["game-board"]}>
        <Board squares={squares} onSelect={handleSelect} />
        <button onClick={handleRestart}>Restart</button>
      </div>
      <div className={cls["game-info"]}>
        <div>{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</div>
        <History
          histories={histories}
          currentStep={currentStep}
          onStep={(idx) => setCurrentStep(idx)}
        />
      </div>
    </div>
  );
};
export default TicTacToe;
