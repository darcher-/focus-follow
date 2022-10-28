import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

describe("<Icon />", () => {
  it("Returns default icon", () => {
    expect(trimHTML(attach())).toBe("");
  });

  it("Returns icon with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(
        `<svg class="icon class-test" focusable="false" role="img">
          <use xlink:href="#svg-ref" />
        </svg>`
      )
    );
  });
});
