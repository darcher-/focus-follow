import Util from "../../services/helper";
import Icon from "../icon";

export default {
  makeComponent({
    classList = [],
    className = "",
    id,
    label,
    role = "group",
    innerHTML,
    tagName = "fieldset",
    svgIconId = "#field-group",
    ...props
  } = {}) {
    const title = tagName === "fieldset" ? "legend" : "span";

    return innerHTML
      ? `
      <${tagName} ${Util.makeAttributes({
          ...props,
          class: Util.arrayToString(["group", ...classList, ...className.split(" ")]),
          id,
          role,
        })}>
        ${Util.makeStringNode(svgIconId, Icon.makeComponent({svgIconId}))}
        ${Util.makeStringNode(label, `<${title} class="label">${label}</${title}>`)}
        ${innerHTML}
      </${tagName}>`
      : "";
  },
};
