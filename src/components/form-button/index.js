import Util from "../../services/helper";
import Icon from "../icon";

export default {
  attach({
    className = "",
    classList = [],
    btnIconId,
    innerText,
    role = "button",
    type = "button",
    ...attributes
  } = {}) {
    return Util.verify(
      innerText != null,
      `
      <button
        ${Util.assign({
          ...attributes,
          class: Util.bundle([
            "button",
            ...classList,
            ...className.split(" "),
          ]),
          role,
          type,
        })}
      >
        ${Icon.attach({ className: "icon", svgIconId: btnIconId })}
        <span class="label">${innerText}</span>
      </button>
    `
    );
  },
};
