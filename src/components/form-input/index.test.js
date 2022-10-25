import Input from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Icon element module", () => {
  it("empty string if args are undefined", () => {
    expect(Input.makeComponent()).toBe("");
  });
  it("empty string if args are undefined", () => {
    expect(
      Input.makeComponent({
        id: "test-1",
        label: "text content",
      }),
    ).toContain("text content");
  });
  it("empty string if args are undefined", () => {
    expect(
      Input.makeComponent({
        id: "#test-1",
        label: "text content",
      }),
    ).toContain('for="test-1"');
  });
});
