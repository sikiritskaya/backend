import postsService from "./postsService.js"

class PostsController {
    async create(req, res) {
        try {
            const post = await postsService.create(req.body)
            console.log(req.body)
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
}

export default new PostsController()