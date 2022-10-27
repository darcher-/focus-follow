// utilities & helpers

export default {
  assign(props = {}) {
    return Object.entries(props)
      .map(([key, value]) => (null != value ? `${key}="${value}"` : ""))
      .sort()
      .join(" ");
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
    return condition ? this.bundle(value) : "";
  },

  trim(html = "") {
    return html.replace(/>\s+|\s+</g, (value = "") => value.trim());
  },

  romanYear(num = new Date().getFullYear()) {
    return Object.entries({
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }).reduce((acc, [key, value]) => {
      const multiplier = Math.floor(num / value);
      num -= multiplier * value;
      return `${acc + key.repeat(multiplier)}`;
    }, "");
  },
};
