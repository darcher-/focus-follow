/*global afterEach, jest, it, expect, describe */
import Input from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Icon element module", () => {
  it("empty string if args are undefined", () => {
    expect(Input.attach()).toBe("");
  });

  it("shows label test", () => {
    expect(
      Input.attach({
        id: "test-1",
        label: "text content",
      })
    ).toContain("text content");
  });

  it("shows no # in for", () => {
    expect(
      Input.attach({
        id: "#test-1",
        label: "text content",
      })
    ).toContain('for="test-1"');
  });
});
