import postsService from './postsService.js';

class PostsController {
    getAll(req, res) {
        postsService.getAll()
            .then(posts => {
                return res.json(posts);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    create(req, res) {
        postsService.create(req.body)
            .then(post => {
                res.json(post);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    delete(req, res) {
        postsService.delete(req.params.id)
            .then(post => {
                return res.json(post);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    update(req, res) {
        postsService.update(req.body)
            .then(postUpdate => {
                return res.json(postUpdate);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    getAllComments(req, res) {
        postsService.getAllComments(req.params.id)
            .then(allComments => {
                return res.json(allComments);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
}

export default new PostsController();