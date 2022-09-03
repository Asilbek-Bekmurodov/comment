import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
