import * as dotenv from "dotenv";

import Button from "./components/form-button";

// TODO: setup `until-found` hidden states

dotenv.config();

document.body.insertAdjacentHTML("beforeend", Button.makeComponent());
