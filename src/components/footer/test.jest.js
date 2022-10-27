import Footer from ".";
import _h from "../../services/helper.service.js";
import mock from "./fixtures.js";

/**
 * NOTE: _h.trim()
 * a utility method used
 * to remove whitespace
 * for easier comparisons.
 */

afterEach(() => {
  jest.clearAllMocks();
});

describe("Footer", () => {
  it("Returns default footer", () => {
    const footer = _h.trim(Footer.attach(mock.undef));
    const result = _h.trim(`
      <footer class="footer">
        ${mock.legal}
      </footer>
    `);

    expect(footer).toBe(result);
  });

  it("Returns footer with childNode", () => {
    const footer = _h.trim(Footer.attach(mock.child));
    const result = _h.trim(`
      <footer class="footer">
        <span>test</span>
        ${mock.legal}
      </footer>
    `);

    expect(footer).toBe(result);
  });

  it("Returns footer with custom class", () => {
    const mocked = { classes: ["footer-alt"] };
    const footer = _h.trim(Footer.attach(mock.class));
    const result = _h.trim(
      `<footer class="footer footer-alt">
        ${mock.legal}
      </footer>`
    );

    expect(footer).toBe(result);
  });

  it("Returns footer with additional attribute", () => {
    const mocked = { id: "some-id" };
    const footer = _h.trim(Footer.attach(mock.props));
    const result = _h.trim(`
      <footer aria-label="Some Label" class="footer" id="some-id">
        ${mock.legal}
      </footer>
    `);

    expect(footer).toBe(result);
  });
});
