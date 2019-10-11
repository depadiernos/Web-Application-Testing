import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../Dashboard";

afterEach(rtl.cleanup)

test("Render Ball Count", () => {

  const wrapper = rtl.render(<Dashboard/>);
  // using a regular expression instead of a string allows our
  // query to be much more flexible. for example, if the text becomes
  // all uppercase, we don't want our test to break
  const element = wrapper.getByText(/ball/i);
});

test("Render Strike Count", () => {

  const wrapper = rtl.render(<Dashboard />);
  // using a regular expression instead of a string allows our
  // query to be much more flexible. for example, if the text becomes
  // all uppercase, we don't want our test to break
  const element = wrapper.getByText(/strike/i);
});

test("Render Foul Count", () => {

  const wrapper = rtl.render(<Dashboard />);
  // using a regular expression instead of a string allows our
  // query to be much more flexible. for example, if the text becomes
  // all uppercase, we don't want our test to break
  const element = wrapper.getByText(/foul/i);
});

test("Render Hit Count", () => {

  const wrapper = rtl.render(<Dashboard />);
  // using a regular expression instead of a string allows our
  // query to be much more flexible. for example, if the text becomes
  // all uppercase, we don't want our test to break
  const element = wrapper.getByText(/hit/i);
});