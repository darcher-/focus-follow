import { verify, assign, bundle } from "../../services/helper";
import "./style";

// TODO: establish structure for children

export default {
  attach({ classes, icon, label, ...etc } = {}) {
    return `<button
      ${assign({
        ...etc,
        class: bundle(["button", ...classes]),
      })}>
      ${verify(null != icon, icon)}
      ${verify(null != label, label)}
    </button>`;
  },
};
