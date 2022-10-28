import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

describe("<Group />", () => {
  it("Returns default group", () => {
    expect(util.trimHTML(node.attach())).toBe("");
  });

  it("Returns group with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(
        `<label class=\"entry class-test\">
          <span class="label-test">Label test</span>
          <input class=\"field\" id=\"id-test\" type=\"text\" />
        </label>`
      )
    );
  });
});
