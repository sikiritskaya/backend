import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'AuthUser'
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

export default mongoose.model('Post', Post);