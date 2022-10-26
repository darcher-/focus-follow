import Util from "../../services/helper";

export default {
  makeComponent({
    classList = [],
    className = "",
    id,
    heading,
    copyright = `${new Date().getFullYear} &copy; All rights reserved.`,
    ...props
  } = {}) {
    return `<footer ${Util.makeAttributes({
      ...props,
      class: Util.arrayToString([
        "footer",
        ...classList,
        ...className.split(" "),
      ]),
      id,
    })}>
      ${Util.booleanProperty(
        heading,
        `<strong class="heading">${heading}</strong>`
      )}
      ${Util.booleanProperty(
        copyright,
        `<p class="copyright">${copyright}</p>`
      )}
    </footer>`;
  },
};
