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
        : `${prefix}${set}${suffix}`
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

  deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
    for (const key of props) {
      const value = obj[key];

      if (value && typeof value === "object") {
        this.deepFreeze();
      }
    }

    return Object.freeze(obj);
  },

  randomInt() {
    return Math.round(Math.round() * 999);
  },
};
