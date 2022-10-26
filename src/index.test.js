/*global afterEach, jest, it, expect, describe */
import App from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Root module", () => {
  it("App instance initializes", () => {
    expect(App).toBeTruthy();
  });
});
