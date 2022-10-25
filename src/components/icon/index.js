import Util from "../../services/helper";

export default {
  makeComponent({
    classList = [],
    className = "",
    focusable = "false",
    role = "img",
    svgIconId,
  } = {}) {
    return svgIconId != null && svgIconId.length > 1
      ? `
      <svg
        ${Util.makeAttributes({
          class: Util.arrayToString(["icon", ...classList, ...className.split(" ")]),
          focusable,
          role,
        })}
      >
        <use xlink:href="#${
          svgIconId.includes("#") ? svgIconId.replace("#", "") : svgIconId
        }" />
      </svg>
    `
      : "";
  },
};
