import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

describe("<Header />", () => {
  it("Returns default header", () => {
    expect(util.trimHTML(node.attach())).toBe("");
  });

  it("Returns footer with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(`
        <header class="header class-test" id="id-test">
          <h1>Title test</h1>
          <span>Children test</span>
        </header>
      `)
    );
  });
});
