import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  describe("initialize counter with default value is 0 and default as description", () => {
    beforeEach(async () => {
      render(<Counter description="default?" defaultCount={10} />);
      await waitFor(() => screen.findByText("current count is 10"));
    });

    it("should have default 10  and descritpion is default ", () => {
      expect(screen.getByText("current count is 10")).toBeInTheDocument();
      expect(screen.getByText(/default?/)).toBeInTheDocument();
    });

    it("should have default 10  and descritpion is default ", async () => {
      fireEvent.click(screen.getByRole("button", { name: "subtract counter" }));
      await waitFor(() => screen.findByText("current count is 9"));
    });

    it("should have current count is 1 onlcik and descritpion is default", () => {
      fireEvent.click(screen.getByRole("button", { name: "add counter" }));
      expect(screen.getByText("current count is 11")).toBeInTheDocument();
    });

    describe("when incremrntor changed value", () => {
      beforeEach(async () => {
        await user.type(screen.getByLabelText(/Incrementor/), "10");
        await user.click(screen.getByRole("button", { name: "add counter" }));
      });

      it("should have current count is 1 onlcik and descritpion is default", async () => {
        await waitForElementToBeRemoved(screen.queryByText(/too small/));
      });
    });
  });
});

it.todo("should have default 1 and add 1 and descritpion is default");
