import User from './User.js';

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }
    async delete(id) {
        if (!id) {
            throw new Error('user didn\'t find');
        }
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    }
    async update(user) {
        if (!user._id) {
            throw new Error('user didn\'t find');
        }
        const userUpdate = await User.findByIdAndUpdate(user._id, user, { new: true });
        return userUpdate;
    }
    getAllUsers() {
        return User.find().populate({ path: 'posts', select: 'title body' });
    }
}

export default new UserService();