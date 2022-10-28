import util from "../../services/helper.service.js";
import "./style.css";

export default {
  attach({
    children = [],
    classes = [],
    text,
    level = 1,
    ...etc
  } = {}) {
    return util.verify(
      null != text,
      `<header ${util.assign({
        ...etc,
        class: util.bundle(["header", ...classes]),
      })}>
        <h${level}>${util.verify(null != text, text)}</h${level}>
        ${util.verify(0 < children?.length, children)}
      </header>`
    );
  },
};
