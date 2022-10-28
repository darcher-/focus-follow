import node from ".";
import mock from "./mock.fixture.js";
import util from "../../services/helper.service.js";

/**
 * NOTE: util.trimHTML()
 * a utility method used
 * to remove whitespace
 * for easier comparisons.
 */

describe("<Footer />", () => {
  it("Returns default footer", () => {
    expect(util.trimHTML(node.attach())).toBe(
      util.trimHTML(`
        <footer class="footer">
          <p class="legal">Copyright © MMXXII</p>
        </footer>
      `)
    );
  });

  it("Returns footer with properties", () => {
    expect(util.trimHTML(node.attach(mock))).toBe(
      util.trimHTML(`
        <footer aria-label="Aria label test" class="footer class-test" id="id-test">
          <span>Children test</span>
          <p class="legal">Copyright © MMXXII</p>
        </footer>
      `)
    );
  });
});
