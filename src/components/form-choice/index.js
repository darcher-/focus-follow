import Util from "../../services/helper";

// type Role = string & ("checkbox" | "option" | "radio");
// interface Choice<T extends HTMLElement> extends T { value: ArrayLike<T>; }
// Option.makeElement<T extends HTMLElement>({ attributes: Choice<T> }): ArrayLike[T] {}

export default {
  makeComponent({
    checked = false,
    selected = false,
    classList = [],
    className = "",
    disabled = false,
    type = "radio",
    label,
    id,
    ...props
  } = {}) {
    window.addEventListener(
      "change",
      ({target}) => {
        target.setAttribute("aria-checked", target.checked);
        target.closest(".choice").setAttribute("data-checked", target.checked);
      },
      false,
    );

    if (id && label) {
      return ["radio", "checkbox"].includes(type)
        ? `
        <label
          ${Util.makeAttributes({
            class: Util.arrayToString(["choice", ...classList, ...className.split(" ")]),
            "data-checked": checked,
            "data-disabled": disabled,
            "data-type": type,
            for: id.includes("#") ? id.replace("#", "") : id,
          })}>
          <input
            ${Util.makeAttributes({
              ...props,
              class: "field",
              type,
              label,
              id,
            })}
            ${Util.makeStringNode(checked, "checked")}
            ${Util.makeStringNode(disabled, "disabled")}
            hidden
          />
          <span class="mark" aria-hidden="true"></span>
          <span class="label">${label}</span>
        </label>
      `
        : `
      <option ${Util.makeAttributes({
        ...props,
        class: "field",
        type,
        label,
        id,
      })}
        ${Util.makeStringNode(selected, "selected")}
        ${Util.makeStringNode(disabled, "disabled")}>
        ${label}
      </option>`;
    }

    return "";
  },
};
