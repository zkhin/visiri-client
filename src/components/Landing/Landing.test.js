import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../../contexts/MarkupContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <Landing />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
