import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

test("renders welcome message", () => {
  render(<HomePage />);
  expect(screen.getByText("Welcome to BioCure")).toBeInTheDocument();
});
