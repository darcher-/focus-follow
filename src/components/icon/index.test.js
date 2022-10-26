import Icon from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Icon element module", () => {
  it("renders empty string when svgIconId is undefined", () => {
    expect(Icon.attach()).toBe("");
  });

  it("renders empty string when svgIconId is null", () => {
    expect(Icon.attach({ svgIconId: null })).toBe("");
  });

  it("renders icom string when svgIconId is reference", () => {
    expect(Icon.attach({ svgIconId: "#some-ref" })).toContain(
      'xlink:href="#some-ref"'
    );
  });

  it("renders icon string when svgIconId is id reference", () => {
    expect(Icon.attach({ svgIconId: "some-ref" })).toContain(
      'xlink:href="#some-ref"'
    );
  });
});
