import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from './logger/logger.js';
import db from './db/index.js';
import userRouter from './src/User/routerUser.js';
import postsRouter from './src/Post/routerPosts.js';

const PORT = process.env.Port || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', userRouter);
app.use('/api', postsRouter);


const startApp = async () => {
    try {
        db.sequelize.sync();
        app.listen(PORT, () => logger.info('hello'));
    }
    catch (e) {
        logger.error(e.message);
    }
};

startApp();