import express from "express";
import mongoose from "mongoose";
import router from "./src/router.js";
import 'dotenv/config';

require('dotenv').config()




const app = express()

app.use(express.json())
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT, () => console.log('hello'))
    }
    catch (e) {
        console.log('Smth went wrong')
    }
}

startApp()

