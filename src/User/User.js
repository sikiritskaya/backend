import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
});

User.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'userId'
});

User.set('toObject', { virtuals: true });
User.set('toJSON', { virtuals: true });

export default mongoose.model('User', User);