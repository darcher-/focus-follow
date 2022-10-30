import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

describe("<Group />", () => {
  it("Returns default group", () => {
    expect(trimHTML(attach())).toBe("");
  });

  it("Returns group with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(
        `<div class="label class-test" id="id-test">
          <svg class="icon"><use xlink:href="#svg-ref" /></svg>
          <span>Text test</span>
        </div>`
      )
    );
  });
});
