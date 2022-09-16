import { FC } from "react";
import { Link } from "react-router-dom";
export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Link to='/tic-tac-toe'>Tic-Tac-Toe</Link>
    </div>
  );
};
export default Home;
