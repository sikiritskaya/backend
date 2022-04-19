import Post from "./Post.js"

class PostsService {
    getAll() {
        const posts = Post.find()
        return posts
    }
    create(post) {
        const createdPost = Post.create(post)
        return createdPost
    }
    delete(id) {
        if (!id) {
            throw new Error("post didn't find")
        }
        const deletedPost = Post.findByIdAndDelete(id)
        return deletedPost
    }
    async update(post) {
        if (!post._id) {
            throw new Error("post didn't find")
        }
        const postUpdate = Post.findByIdAndUpdate(post._id, post, { new: true })
        return postUpdate
    }

}

export default new PostsService()