// utilities & helpers

export default {
  assign(props = {}) {
    return `${Object.entries(props)
      .map(([key, value]) => (value ? `${key}="${value}"` : ""))
      .join(" ")}`;
  },

  bundle(list = []) {
    return [...new Set(list)].join(" ").trim();
  },

  compile({
    delimiter = " ",
    prefix = "",
    suffix = "",
    set = "", // or []
  } = {}) {
    return this.verify(
      0 < set?.length,
      Array.isArray(set)
        ? set.map(txt => `${prefix + txt + suffix}`).join(delimiter)
        : `${prefix + set + suffix}`
    );
  },

  remove(target = "", value) {
    return null != value && value.includes(target)
      ? value.replace(target, "")
      : value;
  },

  freeze(obj = {}) {
    Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]:
          null != value && "object" == typeof value
            ? this.freeze()
            : value,
      }),
      {}
    );

    return Object.freeze(obj);
  },

  random() {
    return Math.round(Math.round() * 999);
  },

  verify(condition = false, value = "") {
    return condition ? value : "";
  },
};
