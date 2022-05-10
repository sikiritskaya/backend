import AuthUser from '../AuthUser.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mailService.js';
import Post from '../../../Post/Post.js';
import logger from '../../../../logger/logger.js';
import jwt from 'jsonwebtoken';

class AuthService {
    async registration(username, password, email) {
        const newUser = await AuthUser.findOne({ username });
        const newEmail = await AuthUser.findOne({ email });
        if (newUser || newEmail) {
            throw new Error('such user exists');
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const confirmationCode = uuidv4();
        try {
            const user = await AuthUser.create({ username, password: hashPassword, email, confirmationCode });
            await mailService.sendActivationMail(username, email, confirmationCode);
            return user;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async activate(confirmationCode) {
        const user = await AuthUser.findOne({ confirmationCode });
        if (!user) {
            throw new Error('user not found');
        }
        user.isActive = true;
        await user.save();
        return user;
    }
    async login(username, password) {
        try {
            const user = await AuthUser.findOne({ username });
            const validPassword = await bcrypt.compare(password, user.password);
            if (!user || !validPassword) {
                throw new Error('The user or password is incorrect');
            }
            if (!user.isActive) {
                throw new Error('Pending Account. Please verify your email.');
            }
            const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN, {
                expiresIn: '24h',
        
            });
            return {
                ...user,
                token: accessToken
            };
        }
        catch (e) {
            logger.error(e.message);
        }
    }
    getAllPosts(id) {
        return Post.find({ userId: id }).populate('userId', 'username -_id');
    }
    getAllUsers() {
        return AuthUser.find().populate({ path: 'posts', select: 'title body' });
    }
    logout(){
        
    }
}

export default new AuthService(); 