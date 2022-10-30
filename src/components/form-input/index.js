import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";

export const attach = ({
  classes = [],
  id,
  label,
  type = "text",
  ...etc
} = {}) =>
  verify(
    null != id,
    `<label ${assign({
      class: bundle(["entry", ...classes]),
    })}>
      ${verify(null != label, label)}
      <input ${assign({
        ...etc,
        class: "field",
        type,
        id,
      })} />
    </label>`
  );

export default attach;
