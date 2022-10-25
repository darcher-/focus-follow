import Util from "../../services/helper";
import Icon from "../icon";

export default {
  makeComponent({
    className = "",
    classList = [],
    btnIconId = "#icon-mouse",
    innerText = null,
    role = "button",
    type = "button",
    ...attributes
  } = {}) {
    return Util.makeStringNode(
      innerText,
      `
      <button
        ${Util.makeAttributes({
          ...attributes,
          class: Util.arrayToString(["button", ...classList, ...className.split(" ")]),
          role,
          type,
        })}
      >
        ${Icon.makeComponent({className: "icon", svgIconId: btnIconId})}
        <span class="label">${innerText}</span>
      </button>
    `,
    );
  },
};
