import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";

// TODO: make icon dynamic with fallback
// TODO: create a label component
// TODO: create an input component?
// TODO: create an option component?

export const attach = ({
  classes = [],
  id,
  label,
  type,
  ...etc
} = {}) => {
  const attr = assign({ ...etc, class: "field", type, id });

  return verify(
    null != (id || label),
    bundle([
      verify(
        ["radio", "checkbox"].includes(type),
        `<label ${assign({
          class: bundle(["choice", ...classes]),
        })}>
          <input ${attr} hidden />
          <span class="mark" aria-hidden="true"></span>
          ${label}
        </label>`
      ),
      verify(type == "option", `<option ${attr}>${label}</option>`),
    ])
  );
};

export default attach;
