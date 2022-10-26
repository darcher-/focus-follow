// jest unit tests

import Footer from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Footer element module", () => {
  it("loads footer still when no data provided", () => {
    expect(Footer.attach()).toContain('<footer class="footer"');
  });

  it("loads footer element", () => {
    const header = Footer.attach({
      heading: "Some Title",
      copyright: "&copy; All rights reserved.",
    });
    expect(header).toContain(
      `<strong class="heading">Some Title</strong>`
    );
    expect(header).toContain(`&copy; All rights reserved.`);
  });

  it("loads footer element without heading", () => {
    const header = Footer.attach({
      copyright: "&copy; All rights reserved.",
    });
    expect(header).toContain(`&copy; All rights reserved.`);
  });
});
