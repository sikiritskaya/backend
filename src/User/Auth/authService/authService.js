import AuthUser from "../AuthUser.js"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService from "./mailService.js";
//import tokenService from "./tokenService.js";

class AuthService {
    async registration(username, password, email){
        const newUser = await AuthUser.findOne({username})
        const newEmail = await AuthUser.findOne({email})
        if(newUser || newEmail){
            return res.status(400).json({message: 'such user exists'})
        }
        const hashPassword = bcrypt.hash(password, 5)
        const confirmationCode = uuidv4();
        const user = await AuthUser.create({username, password: hashPassword, email, confirmationCode})
        return user
        //await mailService.sendActivationMail(email, activationLink)
        /* const tokens = tokenService.generateToken({...user})
        await tokenService.saveToken(user._id, tokens.refreshToken) */
    }
}

export default new AuthService() 