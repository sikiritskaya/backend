import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import postsRouter from './src/Post/routerPosts.js';
import userRouter from './src/User/withoutAuth/routerUser.js';
import authRouter from './src/User/Auth/authRouter.js';
import cookieParser from 'cookie-parser';
import commentsRouter from './src/Comments/routerComments.js';
import logger from './logger/logger.js';
import passport from 'passport';
import './src/passport/passport.js';

const PORT = process.env.Port || 8000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

const auth = passport.authenticate('jwt', { session: false });

app.use('/api/auth', authRouter);
app.use('/api', auth, userRouter);
app.use('/api', auth, postsRouter);
app.use('/api', auth, commentsRouter);

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

