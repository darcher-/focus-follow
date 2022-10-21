export default {
  buildText({
    delimiter = " ",
    prefix = "",
    suffix = "",
    set = "", // or []
  } = {}) {
    return set && set.length
      ? Array.isArray(set)
        ? set.map((txt) => `${prefix}${txt}${suffix}`).join(delimiter)
        : `${prefix}${set}${suffix}`
      : "";
  },
};
