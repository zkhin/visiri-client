import React from "react";
import ReactDOM from "react-dom";
import Upload from "./Upload";
import { BrowserRouter } from "react-router-dom";
import { MarkupContextProvider } from "../../contexts/MarkupContext";

Konva.isBrowser = false;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MarkupContextProvider>
        <Upload />
      </MarkupContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
