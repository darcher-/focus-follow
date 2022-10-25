import Choice from ".";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Choice element module", () => {
  it("renders empty string when undefined", () => {
    expect(Choice.makeComponent()).toBe("");
  });
  it("renders html-string of choice field", () => {
    expect(
      Choice.makeComponent({
        label: "Radio one label",
        id: "Z1",
        name: "_z",
        type: "radio",
        checked: true,
        value: "z1",
      }),
    ).toContain("Radio one label");
  });
  it("renders html-string of choice field with classing", () => {
    expect(
      Choice.makeComponent({
        label: "Radio one label",
        id: "Z1",
        type: "checkbox",
        value: "z1",
        className: "test-btn btn-submit",
        classList: ["test-btn", "btn-submit"],
      }),
    ).toContain("choice test-btn btn-submit");
  });
  it("renders html-string of class", () => {
    expect(
      Choice.makeComponent({
        label: "Radio one label",
        id: "Z1",
        type: "radio",
        disabled: true,
        value: "z1",
        className: "test-btn btn-submit",
        classList: ["test-btn", "btn-submit"],
      }),
    ).toContain("choice test-btn btn-submit");
  });
  it("removes # from id string and replaces it", () => {
    expect(
      Choice.makeComponent({
        label: "Radio one label",
        id: "#Z1",
        type: "checkbox",
        disabled: true,
        value: "z1",
        className: "test-btn btn-submit",
        classList: ["test-btn", "btn-submit"],
      }),
    ).toContain('for="Z1"');
  });
  it("does not render when missing label", () => {
    expect(
      Choice.makeComponent({
        id: "Z1",
        type: "checkbox",
        checked: true,
        value: "z1",
        className: "test-btn btn-submit",
        classList: ["test-btn", "btn-submit"],
      }),
    ).toBe("");
  });
  it("does not render when missing id", () => {
    expect(
      Choice.makeComponent({
        label: "Label text",
        type: "option",
        value: "z1",
        selected: true,
      }),
    ).toBe("");
  });
  it("returns an option html-string when type is option", () => {
    expect(
      Choice.makeComponent({
        disabled: true,
        label: "Label text",
        id: "Z1",
        type: "option",
        value: "z1",
      }),
    ).toContain('<option value="z1" class="field"');
  });
  it("returns an option html-string when type is an option", () => {
    document.body.insertAdjacentHTML(
      "beforeend",
      [
        {
          id: "Z0",
          type: "radio",
          value: "z0",
          label: "radio label",
        },
        {
          id: "Z1",
          type: "checkbox",
          value: "z1",
          label: "checkbox label",
        },
      ]
        .map(Choice.makeComponent)
        .join(""),
    );

    const radioInput = document.getElementById("Z0");
    const radioParent = radioInput.parentElement;
    radioParent.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        relatedTarget: radioInput,
      }),
    );
    expect(radioParent.dataset.checked).toBe("true");

    const checkboxInput = document.getElementById("Z1");
    const checkboxParent = checkboxInput.parentElement;
    checkboxParent.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        relatedTarget: checkboxInput,
      }),
    );
    expect(checkboxParent.dataset.checked).toBe("true");

    const bodyFrame = document.body;
    bodyFrame.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        relatedTarget: bodyFrame,
      }),
    );
    expect(bodyFrame.dataset.checked).toBeUndefined();
  });
});
