import * as dotenv from "dotenv";

import Button from "./module/button";

dotenv.config();

document.body.insertAdjacentHTML("beforeend", Button.buildNode());
