import strictEquals from "./strictEquals";

describe("Given two numbers", () => {
  describe("When it recieves a 1 and a 1", () => {
    test("Then it should return true", () => {
      const expectedResult = true;
      const numbers = strictEquals(2, 2);

      expect(numbers).toBe(expectedResult);
    });
  });

  describe("When given two NaN values", () => {
    test("Then it should return false (Rule Exception)", () => {
      expect(strictEquals(NaN, NaN)).toBe(false);
    });
  });
});
