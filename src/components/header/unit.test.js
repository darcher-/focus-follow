import { attach } from ".";
import mock from "./mock.fixture.js";
import { trimHTML } from "../../services/mutate";

describe("<Header />", () => {
  it("Returns default header", () => {
    expect(trimHTML(attach())).toBe("");
  });

  it("Returns footer with properties", () => {
    expect(trimHTML(attach(mock))).toBe(
      trimHTML(`
        <header class="header class-test" id="id-test">
          <h1>Title test</h1>
          <span>Children test</span>
        </header>
      `)
    );
  });
});
