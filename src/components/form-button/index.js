import util from "../../services/helper.service.js";
import "./style.css";

// TODO: establish structure for children

export default {
  attach({ classes = [], icon, label, ...etc } = {}) {
    return util.verify(
      null != label,
      `<button ${util.assign({
        ...etc,
        class: util.bundle(["button", ...classes]),
      })}>
        ${util.verify(null != icon, icon)}
        ${util.verify(null != label, label)}
      </button>`
    );
  },
};
