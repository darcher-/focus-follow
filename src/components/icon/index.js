import util from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({ ref, classes = [], ...etc } = {}) {
    return util.verify(
      null != ref,
      `<svg ${util.assign({
        ...etc,
        class: util.bundle(["icon", ...classes]),
        focusable: "false",
        role: "img",
      })}>
        <use xlink:href="#${util.remove("#", ref)}" />
      </svg>
      `
    );
  },
};
