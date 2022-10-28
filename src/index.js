import * as dotenv from "dotenv";

import { attach } from "./components/form-button";

// TODO: setup `until-found` hidden states
// TODO: use `templates` api for HTML Modules
// TODO: setup automated cypress open/test in package scripts

dotenv.config();

document.body.insertAdjacentHTML("beforeend", attach());
