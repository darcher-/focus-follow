import App from "./index.js";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Root module", () => {
  it("App instance initializes", () => {
    expect(App).toBeTruthy();
  });
});
