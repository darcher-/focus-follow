import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

describe("<Button />", () => {
  it("Returns default button", () => {
    expect(util.trimHTML(node.attach())).toBe("");
  });

  it("Returns button with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(
        `<button class="button class-test" id="id-test">
          <svg class="icon"><use xlink:href="#svg-ref" /></svg>
          <span class="label-test">Label test</span>
        </button>`
      )
    );
  });
});
