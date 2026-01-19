import sum from "./sum.js";

describe("test for sum fnx", () => {
  test("add 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('add -20 + -20 to equal -40', () => {
    expect(sum(-20, -20)).toBe(-40)
})
});
