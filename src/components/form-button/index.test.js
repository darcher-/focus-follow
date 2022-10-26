import Button from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Button element module", () => {
  it("renders empty string when undefined", () => {
    expect(Button.makeComponent()).toBe("");
  });

  it("renders empty string when innerText is null", () => {
    expect(Button.makeComponent({ innerText: null })).toBe("");
  });

  it("renders button string when innerText is string", () => {
    expect(Button.makeComponent({ innerText: "Test text" })).toContain("Test text");
  });
});
