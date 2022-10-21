import Util from "../../script/helper";

export const Icon = {
  buildNode({
    className = "icon:default",
    focusable = "false",
    svgIconId = "",
    role = "img",
    ...attributes
  } = {}) {
    return svgIconId && svgIconId.length
      ? `
      <svg
        class="${Util.buildText({
    set: className,
    prefix: "icon:",
  })}"
        focusable="${focusable}"
        role="${role}"
        ${{ ...attributes }}
      >
        <use xlink:href="#${svgIconId.replace("#", "")}" />
      </svg>
    `
      : "";
  },
};

export default Icon;
