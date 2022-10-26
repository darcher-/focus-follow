import * as dotenv from "dotenv";

import Button from "./components/form-button";

// TODO:
//    setup `until-found` hidden states
//    use `templates` api for HTML Modules

dotenv.config();

document.body.insertAdjacentHTML("beforeend", Button.makeComponent());
