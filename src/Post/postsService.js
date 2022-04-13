import AuthUser from "../User/Auth/AuthUser.js"
import Post from "./Post.js"

class PostsService {
    async getAll(){
        const posts = await Post.find()
        return posts
    }
   /*  async getUserPosts(userId){
        if (!userId) {
            throw new Error("posts didn't find")
        }
        const posts = await Post.find({userId})
        return posts
    } */
    async create(title, body, userId) {
        const createdPost = await Post.create(title, body, userId).populate("AuthUser")
        const createdPost = await Post.create(title, body)
        await AuthUser.findByIdAndUpdate({_id: userId})
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

}

export default new PostsService()