import Util from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Util method", () => {
  describe("BuildText", () => {
    it("renders empty string when set is undefined", () => {
      expect(Util.buildText()).toBe("");
    });

    it("renders empty string when set is null", () => {
      expect(Util.buildText({ set: null })).toBe("");
    });

    it("renders empty string when set is empty string", () => {
      expect(Util.buildText({ set: "" })).toBe("");
    });

    it("renders empty string when set isempty array", () => {
      expect(Util.buildText({ set: [] })).toBe("");
    });

    it("renders empty string when set it empty string", () => {
      expect(Util.buildText({ set: "btn:default" })).toBe(
        "btn:default"
      );
    });

    it("renders items of array", () => {
      expect(
        Util.buildText({ set: ["btn:outlined", "btn:rounded"] })
      ).toBe("btn:outlined btn:rounded");
    });

    it("renders items of array with prefix", () => {
      expect(
        Util.buildText({ set: ["outlined", "rounded"], prefix: "btn:" })
      ).toBe("btn:outlined btn:rounded");
    });

    it("renders item of string with suffix", () => {
      expect(Util.buildText({ set: "btn:round", suffix: "ed" })).toBe(
        "btn:rounded"
      );
    });
  });

  describe("verify", () => {
    it("renders value when condition succeeds", () => {
      expect(
        Util.verify(
          true,
          `<div class="${["test", "element"].join("-")}">Test</div>`
        )
      ).toBe('<div class="test-element">Test</div>');
    });
    it("renders empty string  when condition fails", () => {
      expect(
        Util.verify(
          false,
          `<div class="${["test", "element"].join("-")}">Test</div>`
        )
      ).toBe("");
    });
  });

  describe("assign", () => {
    it("creates html-string attributes from object", () => {
      expect(
        Util.assign({
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
        Util.bundle(["a", "a", "b", "c", "d", 1, 2, "3", "3", 2, "c"])
      ).toBe("a b c d 1 2 3");
    });
  });

  describe("DeepFreeze", () => {
    it("freezes and object completely", () => {
      const obj = Util.deepFreeze({
        key: "value",
        keyb: { keyc: 1, keyd: [2, 3, 4] },
      });

      expect(Object.isFrozen(obj)).toBeTruthy();
    });
  });

  describe("randomInt", () => {
    it("freezes and object completely", () => {
      expect(typeof Util.randomInt()).toBe("number");
    });
  });

  describe("discard", () => {
    it("removes character from string", () => {
      expect(Util.discard("#test", "#")).toBe("test");
    });

    it("cannot remove character from null", () => {
      expect(Util.discard(null, "#")).toBe(null);
    });

    it("cannot remove null from string", () => {
      expect(Util.discard("#test", null)).toBe("#test");
    });
  });
});
