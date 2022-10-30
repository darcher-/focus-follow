import { assign, bundle, verify } from "../../services/mutate";
import "./style.css";

// TODO: establish structure for children

export const attach = ({ classes = [], icon, label, ...etc } = {}) =>
  verify(
    null != label,
    `<button ${assign({
      ...etc,
      class: bundle(["button", ...classes]),
    })}>
      ${verify(null != icon, icon)}
      ${verify(null != label, label)}
    </button>`
  );

export default attach;
