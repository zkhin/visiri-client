import React from "react";
import ReactDOM from "react-dom";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <RegistrationPage />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
