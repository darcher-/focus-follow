import Util from "../../services/helper";
import Icon from "../icon";

export default {
  attach({
    classList = [],
    className = "",
    disabled = false,
    id,
    label,
    svgIconId = "#text-bubble",
    type = "text",
    ...props
  } = {}) {
    return Util.verify(
      label && id,
      `
        <label
          ${Util.assign({
            "class": Util.bundle([
              "input",
              ...classList,
              ...className.split(" "),
            ]),
            "data-disabled": disabled,
            "data-type": type,
            "for": Util.discard(id, "#"),
          })}>
          ${Icon.attach({ svgIconId })}
          <span class="label">${label}</span>
          <input
            ${Util.assign({
              ...props,
              class: "field",
              type,
              label,
              id,
            })}
            ${Util.verify(disabled, "disabled")}
          />
        </label>
      `
    );
  },
};
