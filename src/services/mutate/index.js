export const assign = (props = {}) =>
  Object.entries(props)
    .map(([key, value]) => (null != value ? `${key}="${value}"` : ""))
    .sort()
    .join(" ");

export const bundle = (list = []) =>
  [...new Set(Array.isArray(list) ? list : [list])].join(" ").trim();

export const remove = (target = "", value) =>
  null != value && value.includes(target)
    ? value.replace(target, "")
    : value;

export const freeze = (obj = {}) =>
  Object.freeze(
    Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]:
          null != value && "object" == typeof value
            ? freeze(value)
            : value,
      }),
      {}
    )
  );

export const verify = (condition = false, value = "") =>
  condition ? bundle(value) : "";

export const trimHTML = (html = "") =>
  html.replace(/>\s+|\s+</g, value => value.trim());

export default { assign, bundle, remove, freeze, verify, trimHTML };
