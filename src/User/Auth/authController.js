import AuthUser from "./AuthUser.js"
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
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
            res.status(400).json({message: 'registration error'})
        }
    }
    async login(req,res){
        if(!AuthUser.isActive){
            return res.status(401).send({
                message:'Pending Account. Please verify your email.'
            })
        }
        try{
            const {username, password} = req.body
            const user = await AuthUser.findOne({username})
            if(!user){
                return res.status(400).json({message: 'user did non find'})
            }
            const validPassword = bcrypt.compareSync(password,user.password)
            if(!validPassword){
                return res.status(400).json({message:'password incorrect'})
            }
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
    async testRouter(req, res){
        try{
            return res.json('well done')
        }
        catch(e){
            
        }
    }
}

export default new AuthController()