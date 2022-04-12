import Post from "./Post.js"

class PostsService {
    async getAll(){
        const posts = await Post.find()
        return posts
    }
    async getUserPosts(){
        if (!userId) {
            throw new Error("posts didn't find")
        }
        const posts = await Post.find(userId)
        return posts
    }
    async create(post) {
        const createdPost = await Post.create(post)
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