import Util from "../../services/helper";

// type Role = string & ("checkbox" | "option" | "radio");
// interface Choice<T extends HTMLElement> extends T { value: ArrayLike<T>; }
// Option.makeElement<T extends HTMLElement>({ attributes: Choice<T> }): ArrayLike[T] {}

export default {
  attach({
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
        target
          .closest(".choice")
          .setAttribute("data-checked", target.checked);
      },
      false
    );

    if ([id, label].includes(undefined)) {
      return "";
    }

    const inputNode = Util.verify(
      ["radio", "checkbox"].includes(type),
      `
        <label
          ${Util.assign({
            "class": Util.bundle([
              "choice",
              ...classList,
              ...className.split(" "),
            ]),
            "data-checked": checked,
            "data-disabled": disabled,
            "data-type": type,
            "for": Util.discard(id, "#"),
          })}>
          <input
            ${Util.assign({
              ...props,
              class: "field",
              type,
              label,
              id,
            })}
            ${Util.verify(checked, "checked")}
            ${Util.verify(disabled, "disabled")}
            hidden
          />
          <span class="mark" aria-hidden="true"></span>
          <span class="label">${label}</span>
        </label>
      `
    );

    const optionNode = Util.verify(
      ["option"].includes(type),
      `<option ${Util.assign({
        ...props,
        class: "field",
        type,
        label,
        id,
      })}
        ${Util.verify(selected, "selected")}
        ${Util.verify(disabled, "disabled")}>
        ${label}
      </option>`
    );

    return inputNode + optionNode;
  },
};
