import Home from "pages/home/home";
import TicTacToe from "pages/tic-tac-toe/tic-tac-toe";
import { FC } from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";

export interface RoutesProps {}

const Routes: FC<RoutesProps> = () => {
  return (
    <BaseRoutes>
      <Route path='' element={<Home />} />
      <Route path='tic-tac-toe' element={<TicTacToe />} />
    </BaseRoutes>
  );
};
export default Routes;
