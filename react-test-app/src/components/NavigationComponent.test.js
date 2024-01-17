import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";

test("navigating between pages", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavigationComponent />
    </MemoryRouter>
  );

  const homeLink = getByText(/Home/i);
  const aboutLink = getByText(/About/i);

  fireEvent.click(aboutLink);

  expect(getByText(/About Page/i)).toBeInTheDocument();

  fireEvent.click(homeLink);

  expect(getByText(/Main Page/i)).toBeInTheDocument();
});
