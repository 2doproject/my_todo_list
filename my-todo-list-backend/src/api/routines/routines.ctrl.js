/* 루틴 생성
POST /api/routines
{ isDone, todo, type }
*/
export const write = async (ctx) => {
  const { isDone, todo, type } = ctx.request.body;
  const routine = new routine({
    isDone,
    todo,
    type,
  });
  try {
    await routine.save();
    ctx.body = routine;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 루틴 목록 조회
GET /api/routines
*/
export const list = async (ctx) => {
  try {
    const routines = await routine.find().exec();
    ctx.body = routines;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* id별 루틴 조회
GET /api/routines/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const routine = await routine.findById(id).exec();
    if (!routine) {
      ctx.status = 404;
      return;
    }
    ctx.body = routine;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 루틴 제거
DELETE /api/routines/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await routine.findByIdAndRemove(id).exec();
    ctx.satatu = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 루틴 정보 수정 (특정 정보 변경)
PATCH /api/posts/:id
 {  isDone, todo, type } 
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const routine = await routine
      .findByIdAndUpdate(id, ctx.request.body, {
        new: true,
      })
      .exec();
    if (!routine) {
      ctx.status = 404;
      return;
    }
    ctx.body = routine;
  } catch (e) {
    ctx.throw(500, e);
  }
};
