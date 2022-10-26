import Util from "../../services/helper";
import Icon from "../icon";

export default {
  makeComponent({
    classList = [],
    className = "",
    disabled = false,
    id,
    label,
    svgIconId = "#text-bubble",
    type = "text",
    ...props
  } = {}) {
    return Util.booleanProperty(
      label && id,
      `
        <label
          ${Util.makeAttributes({
            class: Util.arrayToString([
              "input",
              ...classList,
              ...className.split(" "),
            ]),
            "data-disabled": disabled,
            "data-type": type,
            for: Util.removeFromString(svgIconId, "#"),
          })}>
          ${Icon.makeComponent({ svgIconId })}
          <span class="label">${label}</span>
          <input
            ${Util.makeAttributes({
              ...props,
              class: "field",
              type,
              label,
              id,
            })}
            ${Util.booleanProperty(disabled, "disabled")}
          />
        </label>
      `
    );
  },
};
