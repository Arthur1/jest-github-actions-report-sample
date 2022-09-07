import { sum } from ".";

describe("sum()", () => {
  it("1 + 2 must be 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
