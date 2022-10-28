import { assign, bundle, verify, remove } from "../../services/mutate";
import "./style.css";

export const attach = ({ ref, classes = [], ...etc } = {}) =>
  verify(
    null != ref,
    `<svg ${assign({
      ...etc,
      class: bundle(["icon", ...classes]),
      focusable: "false",
      role: "img",
    })}>
      <use xlink:href="#${remove("#", ref)}" />
    </svg>
      `
  );

export default attach;
