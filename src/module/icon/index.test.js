import Icon from "../icon";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Icon element module", () => {
  it("renders empty string when svgIconId is undefined", () => {
    expect(Icon.buildNode()).toBe("");
  });

  it("renders empty string when svgIconId is null", () => {
    expect(Icon.buildNode({ svgIconId: null })).toBe("");
  });

  it("renders empty string when svgIconId is empty string", () => {
    expect(Icon.buildNode({ svgIconId: "" })).toBe("");
  });

  it("renders icom string when svgIconId is reference", () => {
    expect(Icon.buildNode({ svgIconId: "#some-ref" })).toContain(
      'xlink:href="#some-ref"',
    );
  });

  it("renders icon string when svgIconId is id reference", () => {
    expect(Icon.buildNode({ svgIconId: "some-ref" })).toContain(
      'xlink:href="#some-ref"',
    );
  });
});
