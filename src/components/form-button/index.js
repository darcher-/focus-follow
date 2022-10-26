import Util from "../../services/helper";
import Icon from "../icon";

export default {
  makeComponent({
    className = "",
    classList = [],
    btnIconId,
    innerText,
    role = "button",
    type = "button",
    ...attributes
  } = {}) {
    return Util.booleanProperty(
      innerText != null,
      `
      <button
        ${Util.makeAttributes({
          ...attributes,
          class: Util.arrayToString(["button", ...classList, ...className.split(" ")]),
          role,
          type,
        })}
      >
        ${Icon.makeComponent({ className: "icon", svgIconId: btnIconId })}
        <span class="label">${innerText}</span>
      </button>
    `,
    );
  },
};
