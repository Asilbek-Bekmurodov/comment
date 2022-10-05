import StateCounter from "state-counter";
import ReducerCounter from "reducer-counter";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <StateCounter />
    <ReducerCounter />
  </BrowserRouter>
);
