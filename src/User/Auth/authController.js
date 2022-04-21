import { validationResult } from 'express-validator';
import authService from './authService/authService.js';

class AuthController {
    registration(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).json(errors);
        }
        const { username, password, email } = req.body;
        return authService.registration(username, password, email)
            .then(creationUser => {
                return res.json(creationUser);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    login(req, res) {
        const { username, password } = req.body;
        authService.login(username, password)
            .then(user => {
                return res.json(user);
            })
            .catch(e => {
                res.send(e);
            });
    }
    activate(req, res) {
        authService.activate(req.params.link)
            .then(user => {
                return res.json(user);
            })
            .catch(e => {
                res.send(e);
            });
    }
    getAllPosts(req, res) {
        authService.getAllPosts(req.params.id)
            .then(posts => {
                return res.json(posts);
            })
            .catch(e => {
                res.send(e);
            });
    }
    getAllUsers(req, res) {
        authService.getAllUsers()
            .then(users => {
                return res.json(users);
            })
            .catch(e => {
                res.send(e);
            });
    }
}

export default new AuthController();