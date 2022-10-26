import Header from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Header element module", () => {
  it("loads empty string when no data provided", () => {
    expect(Header.makeComponent()).toBe("");
  });

  it("loads header element", () => {
    const header = Header.makeComponent({
      title: "Some Title",
      subtitle: "Some subtext that leads into the content",
    });
    expect(header).toContain(`<h1 class="title">Some Title</h1>`);
    expect(header).toContain(`<p class="subtitle">Some subtext that leads into the content</p>`);
  });
});
