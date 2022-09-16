import ReactDOM from "react-dom/client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/dist/dropdown.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
