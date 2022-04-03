const Router = require("koa-router");
const users = require("./users");
const routines = require("./routines");

const api = new Router();
api.use("/users", users.route());
api.use("/routines", routines.route());

module.exports = api;
