import mongoose from 'mongoose';

const AuthUser = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isActive: {type: Boolean, default: false},
    confirmationCode: {type: String},
});

export default mongoose.model('AuthUser', AuthUser);