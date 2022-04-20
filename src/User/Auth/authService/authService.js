import AuthUser from "../AuthUser.js"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mailService.js";
import Post from "../../../Post/Post.js";

class AuthService {
    registration(username, password, email) {
        AuthUser.findOne({ username })
        .then(user=>{
            if(user){
                throw new Error('such user exists')
            }
        })
        AuthUser.findOne({ email })
        .then(newEmail=>{
            if(newEmail){
                throw new Error('such email exists')
            }
        })
        bcrypt.hash(password, 5)
        .then(hashPassword=>{
            const confirmationCode = uuidv4(); 
           AuthUser.create({ username, password: hashPassword, email, confirmationCode })
        })
        .then(user=>{
            mailService.sendActivationMail(username, email, confirmationCode)
            return user
        })
 /*        .then(user=>{
            return user
        }) */
        /* const user = AuthUser.create({ username, password, email, confirmationCode })
        //mailService.sendActivationMail(username, email, confirmationCode)
        return user */
    }
    activate(confirmationCode) {
        const user = AuthUser.findOne({ confirmationCode });
        if (!user) {
            throw new Error("user not found")
        }
        user.isActive = true
        user.save()
        return user
    }
    login(username, password) {
        const user = AuthUser.findOne({ username })
        if (!user) {
            throw new Error('user did not find')
        }
        const validPassword = bcrypt.compare(password, user.password)
        if (!validPassword) {
            throw new Error('password incorrect')
        }
        if (!user.isActive) {
            throw new Error('Pending Account. Please verify your email.')
        }
        return user

    }
    getAllPosts(id) {
        const posts = Post.find({ userId: id })
        return posts
    }
    getAllUsers() {
        const users = AuthUser.find()
        return users
    }
}

export default new AuthService() 