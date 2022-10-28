import { assign, bundle, remove, freeze, verify, trimHTML } from ".";

describe("Helper utility methods", () => {
  describe("assign", () => {
    it("returns empty string", () => {
      expect(assign()).toBe("");
    });

    it("returns entries as attribute strings", () => {
      expect(
        assign({
          attr: "value",
          prop: "value",
        })
      ).toBe(`attr="value" prop="value"`);
    });
  });

  describe("bundle", () => {
    it("returns empty string", () => {
      expect(bundle()).toBe("");
    });

    it("returns unique stringified array", () => {
      expect(bundle(["class", "class", "test", "sample"])).toBe(
        "class test sample"
      );
    });
  });

  describe("remove", () => {
    it("returns null", () => {
      expect(remove()).toBeUndefined();
    });

    it("removes character from string", () => {
      expect(remove("#", "#test-id")).toBe("test-id");
    });

    it("removes character from string", () => {
      expect(remove(null, "#test-id")).toBe("#test-id");
    });

    it("removes character from string", () => {
      expect(remove("#", null)).toBeNull();
    });
  });

  describe("freeze", () => {
    it("returns empty object", () => {
      expect(freeze()).toStrictEqual({});
    });

    it("returns frozen objects", () => {
      const test0 = freeze({
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

  describe("verify", () => {
    it("returns empty string", () => {
      expect(verify()).toBe("");
    });

    it("returns value", () => {
      expect(verify(true, "<span>test</span>")).toBe(
        "<span>test</span>"
      );
    });
  });

  describe("trimHTML", () => {
    it("returns empty string", () => {
      expect(trimHTML()).toBe("");
    });

    it("returns flattened html-string", () => {
      expect(trimHTML("<span>test</span> <span>test</span>")).toBe(
        "<span>test</span><span>test</span>"
      );
    });
  });
});
