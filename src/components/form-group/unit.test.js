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
        `<div class="group class-test" id="id-test">
          <svg class="icon"><use xlink:href="#svg-ref" /></svg>
          <span class="label-test">Label test</span>
          <span>Children test</span>
        </div>`
      )
    );
  });
});
