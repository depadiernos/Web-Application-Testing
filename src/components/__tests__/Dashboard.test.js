import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../Dashboard";

afterEach(rtl.cleanup);

test("Render Ball Count", () => {
  const wrapper = rtl.render(<Dashboard />);
  wrapper.getByText(/ball/i);
});

test("Render Strike Count", () => {
  const wrapper = rtl.render(<Dashboard />);
  wrapper.getByText(/strike/i);
});

test("Render Foul Count", () => {
  const wrapper = rtl.render(<Dashboard />);
  wrapper.getByText(/foul/i);
});

test("Render Hit Count", () => {
  const wrapper = rtl.render(<Dashboard />);
  wrapper.getByText(/hit/i);
});
