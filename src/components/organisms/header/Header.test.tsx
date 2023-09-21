import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header.component";

describe("Header Component", () => {
  it("should render the title", () => {
    const { getByText } = render(
      <Header logo={<img src="/path/to/logo.png" alt="Logo" />} title="Test Title" />
    );
    const titleText = getByText("Test Title");

    expect(titleText).toBeInTheDocument();
  });

  it("should render the username and logout button when provided", () => {
    const { getByText } = render(
      <Header username="John Doe" onLogout={() => {}}  title="Test Title" />
    );
    const username = getByText("John Doe");
    const logoutButton = getByText("Logout");

    expect(username).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it("should not render the logout button when username is not provided", () => {
    const { queryByText } = render(<Header title="Test Title" />);
    const logoutButton = queryByText("Logout");

    expect(logoutButton).toBeNull();
  });

  it("should call the onLogout callback when the logout button is clicked", () => {
    const mockLogout = jest.fn();
    const { getByText } = render(
      <Header title="Test Title"  username="John Doe" onLogout={mockLogout} />
    );
    const logoutButton = getByText("Logout");

    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
