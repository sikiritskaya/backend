import Comment from "../Comments/Comment.js"
import AuthUser from "../User/Auth/AuthUser.js"
import Post from "./Post.js"

class PostsService {
    async getAll() {
        const posts = await Post.find()
        return posts
    }
    async create(post) {
        const createdPost = await Post.create(post)
        //const newUser = await AuthUser.findByIdAndUpdate({ _id: id }, { $push: { posts: createdPost._id } }, { new: true });
        return createdPost
    }
    async delete(id) {
        if (!id) {
            throw new Error("post didn't find")
        }
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
    async update(post) {
        if (!post._id) {
            throw new Error("post didn't find")
        }
        const postUpdate = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return postUpdate
    }
    async getAllComments(id){
        const comments = await Comment.find({postId: id})
        return comments
    }
}

export default new PostsService()