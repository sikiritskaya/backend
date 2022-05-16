import { Router } from 'express';
import authController from './authController.js';
import { check } from 'express-validator';

const authRouter = new Router();

authRouter.post('/sign-up', [
    check('username', 'should not be empty').notEmpty(),
    check('password', 'should has 4-10 symbols').isLength({ min: 4, max: 10 })
], authController.signUp);
authRouter.post('/sign-in', authController.signIn);
authRouter.post('/sign-out', authController.logout);
authRouter.get('/activate/:link', authController.activate);
//authRouter.get('/users', authController.getAllUsers);
//authRouter.get('/users/:id', authController.getAllPosts);

export default authRouter;