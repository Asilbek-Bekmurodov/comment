import App from "app";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const data = { past: [1], present: [2], future: [3] };

root.render(
  <BrowserRouter>
    <pre>{JSON.stringify(data)}</pre>
    <button>Increment</button>
    <button>Undo</button>
    <button>Redo</button>
    <button>Reset</button>
  </BrowserRouter>
);
