import mongoose from 'mongoose';

const AuthUser = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: false },
    confirmationCode: { type: String }
});

/* AuthUser.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'userId'
});

AuthUser.set('toObject', { virtuals: true });
AuthUser.set('toJSON', { virtuals: true }); */


export default mongoose.model('AuthUser', AuthUser);