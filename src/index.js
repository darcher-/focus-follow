import * as dotenv from "dotenv";

import Button from "./components/form-button";
import Choice from "./components/form-choice";
import Group from "./components/form-group";
import Input from "./components/form-input";
import Label from "./components/form-label";
import Icon from "./components/icon";

// TODO: setup `until-found` hidden states
// TODO: use `templates` api for HTML Modules
// TODO: setup automated cypress open/test in package scripts

dotenv.config();

document.body.insertAdjacentHTML(
  "afterbegin",
  Group({
    children: [
      Input({
        label: Label({
          text: "Full name",
          icon: Icon({ ref: "#svg-id" }),
        }),
      }),
      Group({
        children: [
          Choice({
            id: "choice-a",
            name: "choices",
            label: Label({ text: "Full name" }),
          }),
          Choice({
            id: "choice-b",
            name: "choices",
            label: Label({ text: "Full name" }),
          }),
        ],
      }),
      Input({
        label: Label({
          text: "Email",
          icon: Icon({ ref: "#svg-id" }),
        }),
        type: "email",
      }),
      Button({ label: Label({ text: "Button" }) }),
    ],
  })
);
