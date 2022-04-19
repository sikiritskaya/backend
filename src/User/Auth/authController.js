import { validationResult } from 'express-validator';
import authService from "./authService/authService.js";


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
            return res.json(user)
        }catch(e){
            res.status(400).json({message: 'login error'})
        }
    }
    async activate(req, res){
        try{
            const user = await authService.activate(req.params.link)
            return res.json(user)
        }
        catch(e){
            res.send(e)
        }
    }
    async getAllPosts(req,res){
        try{
            const posts = await authService.getAllPosts(req.params.id)
            return res.json(posts)
        }
        catch(e){
            res.send(e)
        }
    }
    async getAllUsers(req, res){
        try{
           const users = await authService.getAllUsers()
           return res.json(users)
        }
        catch(e){
            res.send(e)
        }
    }
}

export default new AuthController()