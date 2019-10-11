import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from './App';

afterEach(rtl.cleanup);
const mockData = {
  ballCount: 3,
  strikeCount: 2,
  foulCount: 4,
  hitCount: 10
}


test("Render the app", () => {
  // render our React app into an in-memory DOM so we can test against it
  const wrapper = rtl.render(<App />);

  // element is now our dom element that we can test against
  const element = wrapper.getByText(/baseball count dashboard/i);

  // test will fail if element is not visible to our robot eyes
  expect(element).toBeVisible(1);
});