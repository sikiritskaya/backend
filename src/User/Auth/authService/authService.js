import AuthUser from "../AuthUser.js"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mailService.js";

class AuthService {
    async registration(username, password, email) {
        const newUser = await AuthUser.findOne({ username })
        const newEmail = await AuthUser.findOne({ email })
        if (newUser || newEmail) {
            throw new Error('such user exists')
        } // не отрабатывает
        const hashPassword = await bcrypt.hash(password, 5)
        const confirmationCode = uuidv4();
        try {
            const user = await AuthUser.create({ username, password: hashPassword, email, confirmationCode })
            await mailService.sendActivationMail(username, email, confirmationCode)
            return user
        }
        catch (e) {
            console.log(e)
        }
        
    }
    async activate(confirmationCode) {
        const user = await AuthUser.findOne({ confirmationCode })
        if (!user) {
            throw new Error("user not found")
        }
        user.isActive = true
        await user.save()
        return user
    }
    async login(username, password,) {
        const user = await AuthUser.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: 'user did non find' })
        }
        const validPassword = bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: 'password incorrect' })
        }
        if (!user.isActive) {
            return res.status(401).send({
                message: 'Pending Account. Please verify your email.'
            })
        }
        return user
    }
    async getAllPosts(userId){
        const user = await AuthUser.findOne({_id: userId}).populate('Post')
        return user
    }
    async getAllUsers(){
        const users = await AuthUser.find()
        return users
    }
}

export default new AuthService() 