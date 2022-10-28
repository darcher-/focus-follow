import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

describe("<Choice />", () => {
  it("Returns default choice", () => {
    expect(util.trimHTML(node.attach())).toBe("");
  });

  it("Returns choice with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(
        `<label class="choice class-test">
          <input class="field" id="id-test" type="radio" hidden />
          <span class="mark" aria-hidden="true"></span>
          <span class="label-test">Label test</span>
        </label>`
      )
    );
  });
});
