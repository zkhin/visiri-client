import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <RegistrationForm />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
