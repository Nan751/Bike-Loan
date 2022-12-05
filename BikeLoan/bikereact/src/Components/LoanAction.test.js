import { render, screen } from "@testing-library/react";
import LoanAction from "./LoanAction";

test("Renders Title of the application", () => {
  render(<LoanAction />);
  const linkElement = screen.getByText(/BIKE LOAN!!/i);
  expect(linkElement).toBeInTheDocument();
});
