import Group from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Icon element module", () => {
  it("empty string if args are undefined", () => {
    expect(Group.makeComponent()).toBe("");
  });
  it("fieldset group", () => {
    expect(
      Group.makeComponent({
        id: "test-1",
        label: "text content",
        innerHTML: `<span class="something">test</span>`,
      }),
    ).toContain(`
        <legend class="label">text content</legend>
        <span class="something">test</span>
      </fieldset>`);
  });
  it("div group", () => {
    expect(
      Group.makeComponent({
        id: "test-1",
        label: "text content",
        tagName: "div",
        innerHTML: `<span class="something">test</span>`,
      }),
    ).toContain(`
        <span class="label">text content</span>
        <span class="something">test</span>
      </div>`);
  });
});