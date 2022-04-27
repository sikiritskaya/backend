import 'dotenv/config'; 
import express from 'express';
import mongoose from 'mongoose';
import postsRouter from './src/Post/routerPosts.js';
import userRouter from './src/User/withoutAuth/routerUser.js';
import authRouter from './src/User/Auth/authRouter.js';
import cookieParser from 'cookie-parser';
import commentsRouter from './src/Comments/routerComments.js';
import logger from './logger/logger.js';


const PORT = process.env.Port || 8000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', userRouter);
app.use('/api', postsRouter);
app.use('/api', authRouter);
app.use('/api', commentsRouter);

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => logger.info('hello'));
    }
    catch (e) {
        logger.error(e.message);
    }
};

startApp();

