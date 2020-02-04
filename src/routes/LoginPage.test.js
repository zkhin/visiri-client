import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <LoginPage />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
