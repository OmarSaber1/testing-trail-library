import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

it("should render home ", () => {
  render(<Home />);

  const myElement = screen.getByText("Home");

  expect(myElement).toBeInTheDocument();
});
