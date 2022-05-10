import { Router } from 'express';
import authController from './authController.js';
import { check } from 'express-validator';
import jwt from 'jsonwebtoken';

const authRouter = new Router();

function authenticateToken(req, res, next) {
    /* const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.sendStatus(401);
    } */
    const token = req.cookies.token;
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

authRouter.post('/sign-up', [
    check('username', 'should not be empty').notEmpty(),
    check('password', 'should has 4-10 symbols').isLength({ min: 4, max: 10 })
], authController.registration);
authRouter.post('/sign-in', authController.login);
authRouter.post('/sign-out', authController.logout);
authRouter.get('/activate/:link', authController.activate);
authRouter.get('/users', authController.getAllUsers);
authRouter.get('/users/:id', authenticateToken, authController.getAllPosts);

export default authRouter;