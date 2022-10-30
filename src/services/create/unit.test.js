import { random, romanYear } from ".";

describe("Helper utility methods", () => {
  describe("random", () => {
    it("returns random number", () => {
      expect(typeof random()).toBe("number");
    });
  });

  describe("romanYear", () => {
    it("returns roman numeral for current year", () => {
      expect(romanYear()).toBe("MMXXII");
    });
  });
});
