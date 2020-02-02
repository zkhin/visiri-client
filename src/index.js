import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "./contexts/MarkupContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <MarkupContextProvider>
      <App />
    </MarkupContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
