import Util from "../../services/helper";

export default {
  makeComponent({ classList = [], className = "", id, level = 1, title, subtitle, ...props } = {}) {
    return Util.booleanProperty(
      title && subtitle,
      `
        <header ${Util.makeAttributes({
          ...props,
          class: Util.arrayToString(["header", ...classList, ...className.split(" ")]),
          id,
        })}>
          <h${level} class="title">${title}</h${level}>
          <p class="subtitle">${subtitle}</p>
        </header>
      `,
    );
  },
};
