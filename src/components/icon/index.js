import Util from "../../services/helper";

export default {
  makeComponent({
    classList = [],
    className = "",
    focusable = "false",
    role = "img",
    svgIconId = null,
  } = {}) {
    return Util.booleanProperty(
      svgIconId != null,
      `
        <svg
          ${Util.makeAttributes({
            class: Util.arrayToString([
              "icon",
              ...classList,
              ...className.split(" "),
            ]),
            focusable,
            role,
          })}
        >
          <use xlink:href="#${Util.removeFromString(svgIconId, "#")}" />
        </svg>
      `
    );
  },
};
