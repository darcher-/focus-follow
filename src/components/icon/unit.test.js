import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

describe("<Icon />", () => {
  it("Returns default icon", () => {
    expect(util.trimHTML(node.attach())).toBe("");
  });

  it("Returns icon with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(
        `<svg class="icon class-test" focusable="false" role="img">
          <use xlink:href="#svg-ref" />
        </svg>`
      )
    );
  });
});
