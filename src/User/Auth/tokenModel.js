import mongoose from "mongoose";

const TokenModel = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'AuthUser'},
    refreshToken: {type: String, required: true}
})

export default mongoose.model('tokenModel', TokenModel)