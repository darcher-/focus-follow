import _h from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({ children = [], classes = [], ...etc } = {}) {
    return `
      <footer ${_h.assign({
        ...etc,
        class: _h.bundle(["footer", ...classes]),
      })}>
        ${_h.verify(children.length, children)}
        <p class="legal">Copyright &copy; ${_h.romanYear()}</p>
      </footer>
    `;
  },
};
