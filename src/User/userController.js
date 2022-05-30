import userService from './userService.js';

class UserController {
    async create(req, res) {
        try {
            const user = await userService.create(req.body);
            console.log(req.body);
            res.json(user);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {
        try {
            const user = await userService.delete(req.params.id);
            return res.json(user);
        }
        catch (e) {
            res.status(500).json(e.message);
        }
    }
    async update(req, res) {
        try {
            const userUpdate = await userService.update(req.body);
            return res.json(userUpdate);
        }
        catch (e) {
            res.status(500).json(e.message);
        }
    }
    getAllUsers(req, res) {
        return userService.getAllUsers()
            .then(users => {
                return res.json(users);
            })
            .catch(e => {
                res.send(e);
            });
    }
}

export default new UserController();