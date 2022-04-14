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
    async create(post, id) {
        const createdPost = await Post.create(post)
       // console.log(createdPost)
       // const createdPost = await Post.create(title, body)
        const newUser = await AuthUser.findByIdAndUpdate({_id: id},{$push:{posts: createdPost._id}},{ new: true });
        //return newUser
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