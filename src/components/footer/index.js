import { assign, bundle, verify } from "../../services/mutate";
import { romanYear } from "../../services/create";
import "./style.css";

export const attach = ({
  children = [],
  classes = [],
  ...etc
} = {}) => `<footer ${assign({
  ...etc,
  class: bundle(["footer", ...classes]),
})}>
  ${verify(0 < children.length, children)}
  <p class="legal">Copyright © ${romanYear()}</p>
</footer>`;

export default attach;
