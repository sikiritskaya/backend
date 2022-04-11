import { Router } from "express";
import authController from "./authController.js";
import { check } from 'express-validator';

const authRouter = new Router();

authRouter.post('/registration', [
    check('username', 'should not be empty').notEmpty(),
    check('password', 'should has 4-10 symbols').isLength({min:4, max:10})
], authController.registration)
authRouter.post('/login', authController.login) 
authRouter.get('/activate/:link', authController.activate)
authRouter.get('/test', authController.testRouter )

export default authRouter;