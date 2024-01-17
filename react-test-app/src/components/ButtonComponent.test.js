import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";

test("clicking the button changes its text", () => {
  const { getByText } = render(<ButtonComponent />);
  const buttonElement = getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent("Clicked!");
});
