import util from "../../services/helper.service.js";
import "./style.css";

// TODO: make icon dynamic with fallback
// TODO: create a label component
// TODO: create an input component?
// TODO: create an option component?

export default {
  attach({ classes = [], id, label, type, ...etc } = {}) {
    const attr = util.assign({ ...etc, class: "field", type, id });

    return util.verify(
      null != (id || label),
      util.bundle([
        util.verify(
          ["radio", "checkbox"].includes(type),
          `<label ${util.assign({
            class: util.bundle(["choice", ...classes]),
          })}>
            <input ${attr} hidden />
            <span class="mark" aria-hidden="true"></span>
            ${label}
          </label>`
        ),
        util.verify(
          type == "option",
          `<option ${attr}>${label}</option>`
        ),
      ])
    );
  },
};
