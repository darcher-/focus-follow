import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

describe("<Choice />", () => {
  it("Returns default choice", () => {
    expect(trimHTML(attach())).toBe("");
  });

  it("Returns choice with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(
        `<label class="choice class-test">
          <input class="field" id="id-test" type="radio" hidden />
          <span class="mark" aria-hidden="true"></span>
          <span class="label-test">Label test</span>
        </label>`
      )
    );
  });
});
