import { assign, bundle, verify } from "../../services/helper";
import "./style";

// TODO: make icon dynamic with fallback
// TODO: create a label component
// TODO: create an input component?
// TODO: create an option component?

export default {
  attach({ classes, disabled, id, label, type, ...etc } = {}) {
    const attr = assign({ ...etc, class: "field", type, id });

    return verify(
      null != (id || label),
      bundle([
        verify(
          ["radio", "checkbox"].includes(type),
          `<label
            ${assign({ class: bundle(["choice", ...classes]) })}>
            <input
              ${attr}
              ${verify(disabled, "disabled")}
              hidden />
            <span class="mark" aria-hidden="true"></span>
            ${label}
          </label>`
        ),
        verify(
          type == "option",
          `<option
            ${attr}
            ${verify(disabled, "disabled")}>
            ${label}
          </option>`
        ),
      ])
    );
  },
};
