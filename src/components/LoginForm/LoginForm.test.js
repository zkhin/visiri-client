import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <LoginForm />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
