import AuthUser from "../AuthUser.js"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mailService.js";

class AuthService {
    async registration(username, password, email){
        const newUser = await AuthUser.findOne({username})
        const newEmail = await AuthUser.findOne({email})
        if(newUser || newEmail){
            throw new Error('such user exists') 
        } // не отрабатывает
        const hashPassword =  await bcrypt.hash(password, 5)
        const confirmationCode = uuidv4();
        const user = await AuthUser.create({username, password: hashPassword, email, confirmationCode})
        await mailService.sendActivationMail(username, email, confirmationCode)
        return user
    }
    async activate(confirmationCode){
        const user = await AuthUser.findOne({confirmationCode})
        if(!user){
            throw new Error("user not found")
        }
        user.isActive = true
        await user.save()
        //return user
    }
}

export default new AuthService() 