/* 사용자 생성
POST /api/users
{ name, password, email }
*/
export const write = async (ctx) => {
  const { name, password, email } = ctx.request.body;
  const user = new User({
    name,
    password,
    email,
  });
  try {
    await user.save();
    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 사용자 목록 조회
GET /api/users
*/
export const list = async (ctx) => {
  try {
    const users = await User.find().exec();
    ctx.body = users;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* id별 사용자 조회
GET /api/users/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      ctx.status = 404;
      return;
    }
    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 사용자 제거
DELETE /api/users/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await User.findByIdAndRemove(id).exec();
    ctx.satatu = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 사용자 정보 수정 (특정 정보 변경)
PATCH /api/posts/:id
 { name, password, email } 
*/
export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = await User.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!user) {
      ctx.status = 404;
      return;
    }
    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};
