import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";

export const attach = ({
  classes = [],
  children = [],
  icon,
  label,
  ...etc
} = {}) =>
  verify(
    0 < children?.length,
    `<div ${assign({
      ...etc,
      class: bundle(["group", ...classes]),
    })}>
      ${verify(null != icon, icon)}
      ${verify(null != label, label)}
      ${children}
    </div>`
  );

export default attach;
