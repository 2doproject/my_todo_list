import Router from "koa-router";
import users from "./users";
import routines from "./routines";

const api = new Router();
api.use("/users", users.route());
api.use("/routines", routines.route());

export default api;
