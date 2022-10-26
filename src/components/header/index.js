import Util from "../../services/helper";

export default {
  attach({
    classList = [],
    className = "",
    id,
    level = 1,
    title,
    subtitle,
    ...props
  } = {}) {
    return Util.verify(
      title && subtitle,
      `
        <header ${Util.assign({
          ...props,
          class: Util.bundle([
            "header",
            ...classList,
            ...className.split(" "),
          ]),
          id,
        })}>
          <h${level} class="title">${title}</h${level}>
          <p class="subtitle">${subtitle}</p>
        </header>
      `
    );
  },
};
