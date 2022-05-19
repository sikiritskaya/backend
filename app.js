import 'dotenv/config';
import express from 'express';
/* import postsRouter from './src/Post/routerPosts.js';
import userRouter from './src/User/routerUser.js'; */
import cookieParser from 'cookie-parser';
import logger from './logger/logger.js';
//import user from './models/user.js';
import db from './models/index.js';

const PORT = process.env.Port || 8000;
//const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';

const app = express();

app.use(express.json());
app.use(cookieParser());

/* app.use('/api', userRouter);
app.use('/api', postsRouter); */


const startApp = async () => {
    try {
        await db.sequelize.sync();
        app.listen(PORT, () => logger.info('hello'));
    }
    catch (e) {
        logger.error(e.message);
    }
};

startApp();

