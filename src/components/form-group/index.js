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
    const tag = tagName === "fieldset" ? "legend" : "span";

    return Util.booleanProperty(
      innerHTML,
      `
        <${tagName} ${Util.makeAttributes({
        ...props,
        class: Util.arrayToString(["group", ...classList, ...className.split(" ")]),
        id,
        role,
      })}>
        ${Util.booleanProperty(svgIconId, Icon.makeComponent({ svgIconId }))}
        ${Util.booleanProperty(label, `<${tag} class="label">${label}</${tag}>`)}
        ${innerHTML}
      </${tagName}>`,
    );
  },
};
