export default {
  booleanProperty(condition, value) {
    return condition ? value : "";
  },

  removeFromString(value, target) {
    return value && value.includes(target) ? value.replace(target, "") : value;
  },

  buildText({
    delimiter = " ",
    prefix = "",
    suffix = "",
    set = "", // or []
  } = {}) {
    return this.booleanProperty(
      set && set.length,
      Array.isArray(set) ? set.map((txt) => `${prefix}${txt}${suffix}`).join(delimiter) : `${prefix}${set}${suffix}`,
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

  deepFreeze(obj = {}) {
    Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value && typeof value === "object" ? this.deepFreeze() : value,
      }),
      {},
    );

    return Object.freeze(obj);
  },

  randomInt() {
    return Math.round(Math.round() * 999);
  },
};
