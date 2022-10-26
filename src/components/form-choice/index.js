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
      ({ target }) => {
        target.setAttribute("aria-checked", target.checked);
        target.closest(".choice").setAttribute("data-checked", target.checked);
      },
      false,
    );

    if ([id, label].includes(undefined)) {
      return "";
    }

    const inputNode = Util.booleanProperty(
      ["radio", "checkbox"].includes(type),
      `
        <label
          ${Util.makeAttributes({
            class: Util.arrayToString(["choice", ...classList, ...className.split(" ")]),
            "data-checked": checked,
            "data-disabled": disabled,
            "data-type": type,
            for: Util.removeFromString(id, "#"),
          })}>
          <input
            ${Util.makeAttributes({
              ...props,
              class: "field",
              type,
              label,
              id,
            })}
            ${Util.booleanProperty(checked, "checked")}
            ${Util.booleanProperty(disabled, "disabled")}
            hidden
          />
          <span class="mark" aria-hidden="true"></span>
          <span class="label">${label}</span>
        </label>
      `,
    );

    const optionNode = Util.booleanProperty(
      ["option"].includes(type),
      `<option ${Util.makeAttributes({
        ...props,
        class: "field",
        type,
        label,
        id,
      })}
        ${Util.booleanProperty(selected, "selected")}
        ${Util.booleanProperty(disabled, "disabled")}>
        ${label}
      </option>`,
    );

    return inputNode + optionNode;
  },
};
