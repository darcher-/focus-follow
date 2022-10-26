/*global afterEach, jest, it, expect, describe */
import {
  assign,
  bundle,
  compile,
  random,
  remove,
  freeze,
  verify,
} from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Util method", () => {
  describe("BuildText", () => {
    it("renders empty string when set is undefined", () => {
      expect(compile()).toBe("");
    });

    it("renders empty string when set is null", () => {
      expect(compile({ set: null })).toBe("");
    });

    it("renders empty string when set is empty string", () => {
      expect(compile({ set: "" })).toBe("");
    });

    it("renders empty string when set isempty array", () => {
      expect(compile({ set: [] })).toBe("");
    });

    it("renders empty string when set it empty string", () => {
      expect(compile({ set: "btn:default" })).toBe("btn:default");
    });

    it("renders items of array", () => {
      expect(compile({ set: ["btn:outlined", "btn:rounded"] })).toBe(
        "btn:outlined btn:rounded"
      );
    });

    it("renders items of array with prefix", () => {
      expect(
        compile({ set: ["outlined", "rounded"], prefix: "btn:" })
      ).toBe("btn:outlined btn:rounded");
    });

    it("renders item of string with suffix", () => {
      expect(compile({ set: "btn:round", suffix: "ed" })).toBe(
        "btn:rounded"
      );
    });
  });

  describe("verify", () => {
    it("renders value when condition succeeds", () => {
      expect(
        verify(
          true,
          `<div class="${["test", "element"].join("-")}">Test</div>`
        )
      ).toBe('<div class="test-element">Test</div>');
    });
    it("renders empty string  when condition fails", () => {
      expect(
        verify(
          false,
          `<div class="${["test", "element"].join("-")}">Test</div>`
        )
      ).toBe("");
    });
  });

  describe("assign", () => {
    it("creates html-string attributes from object", () => {
      expect(
        assign({
          class: "class-name",
          id: "some-id",
          role: "button",
        })
      ).toBe('class="class-name" id="some-id" role="button"');
    });
  });

  describe("bundle", () => {
    it("creates a deduplicated string from an array", () => {
      expect(
        bundle(["a", "a", "b", "c", "d", 1, 2, "3", "3", 2, "c"])
      ).toBe("a b c d 1 2 3");
    });
  });

  describe("DeepFreeze", () => {
    it("freezes and object completely", () => {
      const obj = freeze({
        key: "value",
        keyb: { keyc: 1, keyd: [2, 3, 4] },
      });

      expect(Object.isFrozen(obj)).toBeTruthy();
    });
  });

  describe("randomInt", () => {
    it("freezes and object completely", () => {
      expect(typeof random()).toBe("number");
    });
  });

  describe("remove", () => {
    it("removes character from string", () => {
      expect(remove("#", "#test")).toBe("test");
    });

    it("cannot remove character from null", () => {
      expect(remove("#", null)).toBe(null);
    });

    it("cannot remove null from string", () => {
      expect(remove(null, "#test")).toBe("#test");
    });
  });
});
