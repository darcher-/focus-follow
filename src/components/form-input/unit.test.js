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
        `<label class=\"entry class-test\">
          <span class="label-test">Label test</span>
          <input class=\"field\" id=\"id-test\" type=\"text\" />
        </label>`
      )
    );
  });
});
