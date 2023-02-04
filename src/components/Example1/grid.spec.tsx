import { render, screen } from "@testing-library/react";
import GRID from "./grid";

jest.mock("./grid");

describe("Grid", () => {
  it("render mui x grid with rows and columns ", () => {
    render(<GRID />);
    expect(screen.getByText("MOCKED")).toBeInTheDocument();
  });
});
