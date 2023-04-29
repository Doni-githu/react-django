import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./index.scss";
import Provider from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools()
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);