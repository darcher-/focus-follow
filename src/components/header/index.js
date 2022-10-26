import { assign, bundle, verify } from "../../services/helper";
import "./style";

export default {
  attach({ children, text, level = 1, classes, ...etc } = {}) {
    return `<header ${assign({
      ...etc,
      class: bundle(["footer", ...classes]),
    })}>
      <h${level}>${verify(null != text, text)}</h${level}>
      ${verify(0 < children?.length, children)}
    </header>`;
  },
};
