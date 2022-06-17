import Routine from '../../models/routine';
/* 루틴 생성
POST /api/routines
{ isDone, todo, type }
*/
export const write = async (ctx) => {
  const { isDone, todo, type, targetDate } = ctx.request.body;

  const routine = new Routine({
    isDone,
    todo,
    type,
    targetDate,
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
    const routines = await Routine.find().exec();
    ctx.body = routines;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 루틴 목록 검색
GET /api/routines/search
*/
export const search = async (ctx) => {
  const { isDone, todo, type, startDate, endDate } = ctx.request.query;
  console.log(' new Date(startDate)', new Date(startDate));
  try {
    const routines = await Routine.find({
      isDone: isDone,
      todo: todo,
      type: type,
      startDate: { $gte: new Date(startDate) },
      endDate: { $lte: endDate },
    }).exec();
    ctx.body = routines;
    console.log('routines', routines);
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
    const routine = await Routine.findById(id).exec();
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
    await Routine.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 루틴 정보 수정 (특정 정보 변경)
PATCH /api/routines/:id
 {  isDone, todo, type } 
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const routine = await Routine.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!routine) {
      ctx.status = 404;
      return;
    }
    ctx.body = routine;
  } catch (e) {
    ctx.throw(500, e);
  }
};
