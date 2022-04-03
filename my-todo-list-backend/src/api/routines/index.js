const Router = require("koa-router");
const routines = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

routines.get("/", printInfo);
routines.post("/", printInfo);
routines.get("/:id", printInfo);
routines.delete("/:id", printInfo);
routines.put("/:id", printInfo);
routines.patch("/:id", printInfo);

module.exports = routines;
