import { validationResult } from 'express-validator';
import logger from '../../logger/logger.js';
import authService from './authService/authService.js';

class AuthController {
    signUp(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).json(errors);
        }
        const { username, password, email } = req.body;
        return authService.signUp(username, password, email)
            .then(creationUser => {
                return res.json(creationUser);
            })
            .catch(e => {
                res.status(500).json(e);
                logger.error(e);
            });
    }
    signIn(req, res) {
        const { username, password } = req.body;
        authService.signIn(username, password)
            .then(user => {
                return res
                    .cookie('token', user.token, { httpOnly: true, maxAge: process.env.TOKEN_EXPIRATEION_INTERVAL_HOURS * 1000 * 60 * 60 })
                    .json(user);
            })
            .catch(e => {
                res.send(e);
                logger.error(e);
            });
    }
    activate(req, res) {
        authService.activate(req.params.link)
            .then(user => {
                return res.json(user);
            })
            .catch(e => {
                res.send(e);
                logger.error(e);
            });
    }
    logout(req, res) {
        return res
            .clearCookie('token')
            .json('ok');
    }
}

export default new AuthController();