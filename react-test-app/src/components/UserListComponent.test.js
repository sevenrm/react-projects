//UserListComponent.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserListComponent from "./UserListComponent";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolveValue({
    json: jset.fn().mockResolveValue([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]),
  });
});

test("displays a list of users", async () => {
  setTimeout(async () => {
    render(<UserListComponent />);

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    });
  }, 1000);
});
