import jwt from 'jsonwebtoken';
import tokenModel from '../tokenModel';

class TokenService {
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"})
        const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH, {expiresIn: "30d"})
        return{
            accessToken,
            refreshToken
        }
    }
    async saveToken (userId, refreshToken){
        const tokenData = await tokenModel.findOne({user: userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token;
    }
}

export default new TokenService()