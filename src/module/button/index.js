import Icon from "../icon";
import Util from "../../script/helper";

export const Button = {
  buildNode({
    className = "btn:default",
    btnIconId = "#icon-mouse",
    innerText = null,
    role = "button",
    type = "button",
    ...attributes
  } = {}) {
    return innerText && innerText.length
      ? `
      <button
        class="${Util.buildText({
    set: className,
    prefix: "btn:",
  })}"
        role="${role}"
        type="${type}"
        ${{ ...attributes }}
      >
        <div class="btn:context">
          ${Icon.buildNode({
    className: "btn:icon",
    reference: btnIconId,
  })}
          <span class="btn:text">
            ${innerText}
          </span>
        </div>
      </button>
    `
      : "";
  },
};

export default Button;
