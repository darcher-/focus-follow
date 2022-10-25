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
      class: Util.arrayToString(["footer", ...classList, ...className.split(" ")]),
      id,
    })}>
      ${heading ? `<strong class="heading">${heading}</strong>` : ""}
      <p class="copyright">${copyright}</p>
    </footer>`;
  },
};
