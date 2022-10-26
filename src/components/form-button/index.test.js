/*global afterEach, jest, it, expect, describe */
import { attach } from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Button element module", () => {
  it("renders empty string when undefined", () => {
    expect(attach()).toBe("");
  });

  it("renders empty string when innerText is null", () => {
    expect(attach({ innerText: null })).toBe("");
  });

  it("renders button string when innerText is string", () => {
    expect(attach({ innerText: "Test text" })).toContain("Test text");
  });
});
