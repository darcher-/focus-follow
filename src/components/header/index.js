import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";
export const attach = ({
  children = [],
  classes = [],
  text,
  level = 1,
  ...etc
} = {}) =>
  verify(
    null != text,
    `<header ${assign({
      ...etc,
      class: bundle(["header", ...classes]),
    })}>
      <h${level}>${verify(null != text, text)}</h${level}>
      ${verify(0 < children?.length, children)}
    </header>`
  );

export default attach;
