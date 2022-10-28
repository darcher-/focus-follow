import util from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({ classes = [], children = [], icon, label, ...etc } = {}) {
    return util.verify(
      0 < children?.length,
      `<div ${util.assign({
        ...etc,
        class: util.bundle(["group", ...classes]),
      })}>
        ${util.verify(null != icon, icon)}
        ${util.verify(null != label, label)}
        ${children}
      </div>`
    );
  },
};
