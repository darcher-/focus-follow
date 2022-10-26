import { assign, bundle, verify } from "../../services/helper";
import "./style";

export default {
  attach({
    classes,
    disabled = false,
    id,
    label,
    icon,
    type = "text",
    ...etc
  } = {}) {
    return verify(
      null != id,
      `<label
        ${assign({ class: bundle(["entry", ...classes]) })}>
        ${verify(null != icon?.id, icon)}
        ${verify(null != label?.text, label)}>
        <input
          ${assign({ ...etc, class: "field", type, id })}
          ${verify(disabled, "disabled")}
        />
      </label>`
    );
  },
};
