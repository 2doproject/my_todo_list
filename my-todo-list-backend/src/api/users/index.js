import Router from "koa-router";
import * as usersCtrl from "./users.ctrl";

const users = new Router();

users.get("/", usersCtrl.list);
users.post("/", usersCtrl.write);
users.get("/:id", usersCtrl.read);
users.delete("/:id", usersCtrl.remove);
users.patch("/:id", usersCtrl.update);

export default users;
