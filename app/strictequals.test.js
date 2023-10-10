import strictEquals from "./strictEquals";

describe("Given two numbers", () => {
  describe("When given a 1 and a 1", () => {
    test("Then it should return true", () => {
      const expectedResult = true;
      const numbers = strictEquals(2, 2);

      expect(numbers).toBe(expectedResult);
    });
  });

  describe("When given two NaN values", () => {
    test("Then it should return false", () => {
      expect(strictEquals(NaN, NaN)).toBe(false);
    });
  });

  describe("When given 0 and -0", () => {
    test("Then it should return true", () => {
      const isNegativeZero = (value) => Object.is(value, -0);
      const valueA = 0;
      const valueB = -0;

      if (isNegativeZero(valueA) && isNegativeZero(valueB)) {
        expect(strictEquals(valueA, valueB)).toBe(true);
      }
    });
  });

  describe("When given -0 and 0", () => {
    test("Then it should return true", () => {
      const isNegativeZero = (value) => Object.is(value, -0);
      const valueA = 0;
      const valueB = 0;

      if (isNegativeZero(valueA) && isNegativeZero(valueB)) {
        expect(strictEquals(valueA, valueB)).toBe(true);
      }
    });
  });
});
