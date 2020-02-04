import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <LandingPage />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
