import util from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({ classes = [], id, label, type = "text", ...etc } = {}) {
    return util.verify(
      null != id,
      `<label ${util.assign({
        class: util.bundle(["entry", ...classes]),
      })}>
        ${util.verify(null != label, label)}
        <input ${util.assign({
          ...etc,
          class: "field",
          type,
          id,
        })} />
      </label>`
    );
  },
};
