import Helper from "../helper";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Helper utility method", () => {
  it("renders empty string when set is undefined", () => {
    expect(Helper.buildText()).toBe("");
  });

  it("renders empty string when set is null", () => {
    expect(Helper.buildText({ set: null })).toBe("");
  });

  it("renders empty string when set is empty string", () => {
    expect(Helper.buildText({ set: "" })).toBe("");
  });

  it("renders empty string when set isempty array", () => {
    expect(Helper.buildText({ set: [] })).toBe("");
  });

  it("renders empty string when set it empty string", () => {
    expect(Helper.buildText({ set: "btn:default" })).toBe("btn:default");
  });

  it("renders items of array", () => {
    expect(Helper.buildText({ set: ["btn:outlined", "btn:rounded"] })).toBe(
      "btn:outlined btn:rounded",
    );
  });

  it("renders items of array with prefix", () => {
    expect(
      Helper.buildText({ set: ["outlined", "rounded"], prefix: "btn:" }),
    ).toBe("btn:outlined btn:rounded");
  });

  it("renders item of string with suffix", () => {
    expect(Helper.buildText({ set: "btn:round", suffix: "ed" })).toBe(
      "btn:rounded",
    );
  });
});
