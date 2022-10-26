import Util from "../../services/helper";

export default {
  attach({
    classList = [],
    className = "",
    focusable = "false",
    role = "img",
    svgIconId = null,
  } = {}) {
    return Util.verify(
      svgIconId != null,
      `
        <svg
          ${Util.assign({
            class: Util.bundle([
              "icon",
              ...classList,
              ...className.split(" "),
            ]),
            focusable,
            role,
          })}
        >
          <use xlink:href="#${Util.discard(svgIconId, "#")}" />
        </svg>
      `
    );
  },
};
