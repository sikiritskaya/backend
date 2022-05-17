import { Router } from 'express';
import userController from './userController.js';

const userRouter = new Router();

userRouter.post('/user', userController.create);
userRouter.delete('/user/:id', userController.delete);
userRouter.put('/user', userController.update);
userRouter.get('/user', userController.getAllUsers);

export default userRouter;