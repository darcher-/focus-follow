import Util from "../../services/helper";
import Icon from "../icon";

export default {
  attach({
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

    return Util.verify(
      innerHTML,
      `
        <${tagName} ${Util.assign({
        ...props,
        class: Util.bundle([
          "group",
          ...classList,
          ...className.split(" "),
        ]),
        id,
        role,
      })}>
        ${Util.verify(svgIconId, Icon.attach({ svgIconId }))}
        ${Util.verify(label, `<${tag} class="label">${label}</${tag}>`)}
        ${innerHTML}
      </${tagName}>`
    );
  },
};
