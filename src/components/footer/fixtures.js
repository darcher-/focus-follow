import _h from "../../services/helper.service.js";

export default {
  legal: `<p class="legal">Copyright &copy; ${_h.romanYear()}</p>`,
  undef: undefined,
  child: { children: ["<span>test</span>"] },
  class: { classes: ["footer-alt"] },
  props: { "id": "some-id", "aria-label": "Some Label" },
};
