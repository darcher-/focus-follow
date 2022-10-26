// vanilla esm js export

import Fn from "../../services/helper";
import "./index.css";

export default {
  attach({ context, ...etc } = {}) {
    return `
      <footer ${Fn.assign({
        ...etc,
        class: Fn.bundle(["footer", ...etc.classList]),
      })}>
        ${Fn.verify(
          context != null,
          `<p class="subtext">${context}</p>`
        )}
      </footer>
    `;
  },
};
