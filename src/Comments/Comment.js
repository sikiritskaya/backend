import mongoose from "mongoose";

const Comment = new mongoose.Schema({
    author: {type: String, required: true},
    body: {type: String, required: true},
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    }
})

export default mongoose.model('Comment', Comment)