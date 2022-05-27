import db from '../../db/index.js';

const User = db.user;

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }
    async delete(id) {
        if (!id) {
            throw new Error('user did not find');
        }
        const deletedUser = await User.destroy({ where: { id } }); //returned 1?
        return deletedUser;
    }
    async update(user) {
        if (!user.id) {
            throw new Error('user didn\'t find');
        }
        const userUpdate = await User.update({ username: user.username, password: user.password, email: user.email, updatedAt: user.updatedAt }, {
            where: {
                id: user.id
            }
        });  //returned [1]
        return userUpdate;
    }
    getAllUsers() {
        return User.findAll({
            include: 
                {
                    model: db.post,
                    as: 'posts',
                    attributes:{exclude:['updatedAt', 'createdAt', 'userId']}
                }

        });
    }
}

export default new UserService();