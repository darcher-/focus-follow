import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";

export const attach = ({
  classes = [],
  text,
  icon,
  tag = "label",
  ...etc
} = {}) =>
  verify(
    null != text,
    `<${tag} ${assign({
      ...etc,
      class: bundle(["label", ...classes]),
    })}>
      ${verify(null != icon, icon)}
      <span>${text}</span>
    </${tag}>`
  );

export default attach;
