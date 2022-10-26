import { assign, bundle, verify } from "../../services/helper";
import "./style";

export default {
  attach({ children, classes, ...etc } = {}) {
    return `<footer ${assign({
      ...etc,
      class: bundle(["footer", ...classes]),
    })}>${verify(0 < children?.length, children)}</footer>`;
  },
};
