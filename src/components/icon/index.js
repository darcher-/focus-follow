import { verify, remove, bundle, assign } from "../../services/helper";
import "./style";

export default {
  attach({ icon, classes, ...etc } = {}) {
    return verify(
      null != icon?.id,
      `
        <svg
          ${assign({
            ...etc,
            class: bundle(["icon", ...classes]),
            focusable: "false",
            role: "img",
          })}
        >
          <use xlink:href="#${remove("#", icon?.id)}" />
        </svg>
      `
    );
  },
};
