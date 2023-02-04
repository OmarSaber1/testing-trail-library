import { randomBetween } from "./randomBetween";

const spyRandom = jest.spyOn(Math, "random");

describe("Test random naumber", () => {
  beforeEach(() => {
    spyRandom.mockClear().mockReturnValue(0);
  });

  it("should return a random number 3", () => {
    expect(randomBetween(3, 5)).toBe(3);
    expect(spyRandom).toBeCalledTimes(1);
  });
});

describe("Test random naumber", () => {
  beforeEach(() => {
    spyRandom.mockClear().mockReturnValue(0.5);
  });

  it("should return a random number 4", () => {
    expect(randomBetween(3, 5)).toBe(4);
    expect(spyRandom).toBeCalledTimes(1);
  });
});
