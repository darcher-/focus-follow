export default {
  makeStringNode(condition, value) {
    return condition ? value : "";
  },

  buildText({
    delimiter = " ",
    prefix = "",
    suffix = "",
    set = "", // or []
  } = {}) {
    return this.makeStringNode(
      set && set.length,
      Array.isArray(set)
        ? set.map((txt) => `${prefix}${txt}${suffix}`).join(delimiter)
        : `${prefix}${set}${suffix}`,
    );
  },

  makeAttributes(props) {
    return `${Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")}`;
  },

  arrayToString(list) {
    return [...new Set(list)].join(" ").trim();
  },
};
