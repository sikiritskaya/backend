import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'AuthUser'
    }
});
Post.virtual('comments', {
    ref: 'Comment', 
    localField: '_id', 
    foreignField: 'postId'
});
 
Post.set('toObject', { virtuals: true });
Post.set('toJSON', { virtuals: true });


export default mongoose.model('Post', Post);