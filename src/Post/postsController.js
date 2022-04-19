
import postsService from "./postsService.js"

class PostsController {
    async getAll(req, res) {
        try {
            const posts = await postsService.getAll()
            return res.json(posts)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async create(req, res) {
        try {
            const post = await postsService.create(req.body)
            res.json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const post = await postsService.delete(req.params.id)
            return res.json(post)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const postUpdate = await postsService.update(req.body)
            return res.json(postUpdate)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAllComments(req,res){
        try{
            const allComments = await postsService.getAllComments(req.params.id)
            return allComments
        }
        catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new PostsController()