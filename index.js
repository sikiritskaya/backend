import 'dotenv/config'; 
import express from "express";
import mongoose from "mongoose";
import postsRouter from './src/Post/routerPosts.js';
import userRouter from "./src/User/routerUser.js";

const PORT = process.env.Port || 8000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';


const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postsRouter)


const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('hello'))
    }
    catch (e) {
        console.log('Smth went wrong')
    }
}

startApp()

