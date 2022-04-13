import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import authService from "./authService/authService.js";

const generateAccessToken = id =>{
    const payload = {
        id,
        username
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"})
}

class AuthController{
    async registration(req,res){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json(errors)
            }
            const {username, password, email} = req.body
            const creationUser = await authService.registration(username, password, email) 
            return res.json(creationUser)
        }catch(e){
            res.status(400).json({message: 'registration error!'})
        }
    }
    async login(req,res){
        try{
            const {username, password} = req.body
            const user = await authService.login(username, password)
            const token = generateAccessToken(user._id)
            return res.json({token})
        }catch(e){
            res.status(400).json({message: 'login error'})
        }
    }
    async activate(req, res){
        try{
            const user = await authService.activate(req.body.confirmationCode)
            return res.redirect('https://www.onliner.by')
        }
        catch(e){
            console.log(e)
        }
    }
    async getAllPosts(req,res){
        try{
            const user = await authService.getAllPosts(req.params.userId)
            return res.json(user)
        }
        catch(e){
            console.log(e)
        }
    }
    async getAllUsers(req, res){
        try{
           const users = await authService.getAllUsers()
           return res.json(users)
        }
        catch(e){
            console.log(e)
        }
    }
}

export default new AuthController()