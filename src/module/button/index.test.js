import Button from "../button";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Button element module", () => {
  it("renders empty string when undefined", () => {
    expect(Button.buildNode()).toBe("");
  });

  it("renders empty string when innerText is null", () => {
    expect(Button.buildNode({ innerText: null })).toBe("");
  });

  it("renders empty string when innerText is empty string", () => {
    expect(Button.buildNode({ innerText: "" })).toBe("");
  });

  it("renders button string when innerText is string", () => {
    expect(Button.buildNode({ innerText: "Test text" })).toContain("Test text");
  });
});
