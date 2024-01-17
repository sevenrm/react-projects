import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputForm from "./InputForm";

test("typing in the input updates the value", () => {
  const { getByLabelText, getByText } = render(<InputForm />);
  const inputElement = getByLabelText(/Value/i);
  fireEvent.change(inputElement, { target: { value: "Hello" } });
  const valueElement = getByText(/Value/i);
  expect(valueElement).toHaveTextContent("Value: Hello");
});
