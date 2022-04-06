import Router from "koa-router";
import users from "./users";
import routines from "./routines";

const api = new Router();
api.use("/users", users.routes());
api.use("/routines", routines.routes());

export default api;
