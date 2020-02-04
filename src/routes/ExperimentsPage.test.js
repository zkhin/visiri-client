import React from "react";
import ReactDOM from "react-dom";
import ExperimentsPage from "./ExperimentsPage";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <ExperimentsPage />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
