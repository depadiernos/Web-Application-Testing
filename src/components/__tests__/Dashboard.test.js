import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

