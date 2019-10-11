import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(rtl.cleanup);

test("ballCount increments", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/baseball count dashboard/i);
  expect(element).toBeVisible(1);
});

test("ballCount resets at 4", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/ball/i);
  expect(element).toHaveTextContent(/[0-3]/);
});

test("strikeCount increments", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/baseball count dashboard/i);
  expect(element).toBeVisible(1);
});

test("strikeCount resets at 3", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/strike/i);
  expect(element).toHaveTextContent(/[0-2]/);
});

test("foulCount increments", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/baseball count dashboard/i);
  expect(element).toBeVisible(1);
});

test("hitCount increments", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/baseball count dashboard/i);
  expect(element).toBeVisible(1);
});
