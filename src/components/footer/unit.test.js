/*global afterEach, jest, it, expect, describe */
import { attach } from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Footer element module", () => {
  it("loads footer still when no data provided", () => {
    expect(attach()).toContain('<footer class="footer"');
  });

  it("loads footer element", () => {
    const header = attach({
      data: "&copy; All rights reserved.",
    });
    expect(header).toContain(
      `<strong class="heading">Some Title</strong>`
    );
    expect(header).toContain(`&copy; All rights reserved.`);
  });
});
