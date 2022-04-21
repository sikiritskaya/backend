import { Router } from 'express';
import userController from './userController.js';

const userRouter = new Router();

userRouter.post('/users', userController.create);
userRouter.delete('/users/:id', userController.delete);
userRouter.put('/users', userController.update);
//router.post('/users/sendemail', userController.sendEmail)

export default userRouter;