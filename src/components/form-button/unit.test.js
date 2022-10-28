import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

describe("<Button />", () => {
  it("Returns default button", () => {
    expect(trimHTML(attach())).toBe("");
  });

  it("Returns button with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(
        `<button class="button class-test" id="id-test">
          <svg class="icon"><use xlink:href="#svg-ref" /></svg>
          <span class="label-test">Label test</span>
        </button>`
      )
    );
  });
});
