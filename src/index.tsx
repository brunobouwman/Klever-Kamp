import Layout from "Components/Layout";
import { Provider } from "Context";
import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <Provider>
        <App />
      </Provider>
    </MemoryRouter>
  </React.StrictMode>
);
