import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders MyComponent", () => {
  const { getByText } = render(<App />);

  const textElement = getByText(/Hello World/i);

  expect(textElement).toBeInTheDocument();
});
