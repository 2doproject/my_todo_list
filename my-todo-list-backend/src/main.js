require('dotenv').config();
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

const { PORT, MONGO_URI } = process.env;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(error);
  }
};

dbConnect();

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // 라우트 적용

app.proxy = true; // true 일때 proxy 헤더들을 신뢰함
app.use(cors());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port %d ${port}`);
});
