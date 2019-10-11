import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(rtl.cleanup);
const mockData = {
  ballCount: 3,
  strikeCount: 2,
  foulCount: 4,
  hitCount: 10
};

test("Render the app", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/baseball count dashboard/i);
  expect(element).toBeVisible(1);
});
