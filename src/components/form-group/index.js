import { assign, bundle, verify } from "../../services/helper";
import "./style";

export default {
  attach({ children, icon, label, ...etc } = {}) {
    return verify(
      0 < children?.length,
      `<div
        ${assign({
          ...etc,
          class: bundle(["group", ...etc.classes]),
        })}>
        ${verify(null != icon?.id, icon)}
        ${verify(null != label?.text, label)}
        ${children}
      </div>`
    );
  },
};
