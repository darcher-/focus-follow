import util from "./helper.service.js";

describe("Helper utility methods", () => {
  describe("assign", () => {
    it("returns empty string", () => {
      expect(util.assign()).toBe("");
    });

    it("returns entries as attribute strings", () => {
      expect(
        util.assign({
          attr: "value",
          prop: "value",
        })
      ).toBe(`attr="value" prop="value"`);
    });
  });

  describe("bundle", () => {
    it("returns empty string", () => {
      expect(util.bundle()).toBe("");
    });

    it("returns unique stringified array", () => {
      expect(util.bundle(["class", "class", "test", "sample"])).toBe(
        "class test sample"
      );
    });
  });

  describe("remove", () => {
    it("returns null", () => {
      expect(util.remove()).toBeUndefined();
    });

    it("removes character from string", () => {
      expect(util.remove("#", "#test-id")).toBe("test-id");
    });

    it("removes character from string", () => {
      expect(util.remove(null, "#test-id")).toBe("#test-id");
    });

    it("removes character from string", () => {
      expect(util.remove("#", null)).toBeNull();
    });
  });

  describe("freeze", () => {
    it("returns empty object", () => {
      expect(util.freeze()).toStrictEqual({});
    });

    it("returns frozen objects", () => {
      const test0 = util.freeze({
        test1: {
          test2: ["value"],
          test3: "value",
        },
      });
      expect(Object.isFrozen(test0.test1.test3)).toBeTruthy();
      expect(Object.isFrozen(test0.test1.test2)).toBeTruthy();
      expect(Object.isFrozen(test0.test1)).toBeTruthy();
      expect(Object.isFrozen(test0)).toBeTruthy();
    });
  });

  describe("random", () => {
    it("returns random number", () => {
      expect(typeof util.random()).toBe("number");
    });
  });

  describe("verify", () => {
    it("returns empty string", () => {
      expect(util.verify()).toBe("");
    });

    it("returns value", () => {
      expect(util.verify(true, "<span>test</span>")).toBe(
        "<span>test</span>"
      );
    });
  });

  describe("trimHTML", () => {
    it("returns empty string", () => {
      expect(util.trimHTML()).toBe("");
    });

    it("returns flattened html-string", () => {
      expect(util.trimHTML("<span>test</span> <span>test</span>")).toBe(
        "<span>test</span><span>test</span>"
      );
    });
  });

  describe("romanYear", () => {
    it("returns roman numeral for current year", () => {
      expect(util.romanYear()).toBe("MMXXII");
    });
  });
});
