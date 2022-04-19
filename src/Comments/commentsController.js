import commentsService from "./commentsService.js"

class CommentsController {

    async create(req, res) {
        try {
            const comment = await commentsService.create(req.body)
            res.json(comment)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const comment = await commentsService.delete(req.params.id)
            return res.json(comment)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const commentsUpdate = await commentsService.update(req.body)
            return res.json(commentsUpdate)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CommentsController()