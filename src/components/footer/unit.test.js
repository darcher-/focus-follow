import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

/**
 * NOTE: trimHTML()
 * a utility method used
 * to remove whitespace
 * for easier comparisons.
 */

describe("<Footer />", () => {
  it("Returns default footer", () => {
    expect(trimHTML(attach())).toBe(
      trimHTML(`
        <footer class="footer">
          <p class="legal">Copyright © MMXXII</p>
        </footer>
      `)
    );
  });

  it("Returns footer with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(`
        <footer aria-label="Aria label test" class="footer class-test" id="id-test">
          <span>Children test</span>
          <p class="legal">Copyright © MMXXII</p>
        </footer>
      `)
    );
  });
});
