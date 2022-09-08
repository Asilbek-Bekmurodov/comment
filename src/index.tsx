import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js";

import Hooks from "./hooks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Hooks />);
