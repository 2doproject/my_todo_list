import Router from "koa-router";
import * as routinesCtrl from "./routines.ctrl";

const routines = new Router();

routines.get("/", routinesCtrl.list);
routines.post("/", routinesCtrl.write);
routines.get("/:id", routinesCtrl.read);
routines.delete("/:id", routinesCtrl.remove);
routines.patch("/:id", routinesCtrl.update);

export default routines;
