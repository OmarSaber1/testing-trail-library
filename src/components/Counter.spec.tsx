import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  describe("initialize counter with default value is 0 and default as description", () => {
    beforeEach(() => {
      render(<Counter description="default?" defaultCount={10} />);
    });

    it("should have default 0  and descritpion is default ", () => {
      expect(screen.getByText("current count is 10")).toBeInTheDocument();
      expect(screen.getByText(/default?/)).toBeInTheDocument();
    });

    it("should have default 0  and descritpion is default ", () => {
      fireEvent.click(screen.getByRole("button", { name: "subtract counter" }));
      expect(screen.getByText("current count is 9")).toBeInTheDocument();
      expect(screen.getByText(/default?/)).toBeInTheDocument();
    });

    it("should have current count is 1 onlcik and descritpion is default", () => {
      fireEvent.click(screen.getByRole("button", { name: "add counter" }));
      expect(screen.getByText("current count is 11")).toBeInTheDocument();
      expect(screen.getByText(/default?/)).toBeInTheDocument();
    });

    describe("when incremrntor changed value", () => {
      beforeEach(async () => {
        await user.type(screen.getByLabelText(/Incrementor/), "10");
        await user.click(screen.getByRole("button", { name: "add counter" }));
      });

      it("should have current count is 1 onlcik and descritpion is default", () => {
        return expect(
          screen.getByText("current count is 120")
        ).toBeInTheDocument();
      });
    });
  });
});

it.todo("should have default 1 and add 1 and descritpion is default");
