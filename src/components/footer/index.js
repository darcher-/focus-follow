// @flow
import util from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({ children = [], classes = [], ...etc } = {}) {
    return `<footer ${util.assign({
      ...etc,
      class: util.bundle(["footer", ...classes]),
    })}>
      ${util.verify(0 < children.length, children)}
      <p class="legal">Copyright © ${util.romanYear()}</p>
    </footer>`;
  },
};
