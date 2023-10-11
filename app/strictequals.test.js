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
    test("Then it should return false (Rule Exception)", () => {
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

  describe("When given 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const expectedStrictEquals = false;

      const actualStrictEquals = strictEquals(valueA, valueB);
      expect(actualStrictEquals).toBe(expectedStrictEquals);
    });
  });

  describe("When given a true and a false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;

      const isActualBoolean = strictEquals(valueA, valueB);
      const expectedResult = false;

      expect(isActualBoolean).toBe(expectedResult);
    });
  });
});
