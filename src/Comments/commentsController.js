import logger from '../../logger/logger.js';
import commentsService from './commentsService.js';

class CommentsController {

    create(req, res) {
        commentsService.create(req.body)
            .then(comment => {
                res.json(comment);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }
    delete(req, res) {
        commentsService.delete(req.params.id)
            .then(comment => {
                res.json(comment);
            })
            .catch(e => {
                res.status(500).json(e);
                logger.error(e);
            });
    }
    update(req, res) {
        commentsService.update(req.body)
            .then(updateComment => {
                res.json(updateComment);
            })
            .catch(e => {
                res.status(500).json(e);
                logger.error(e);
            });
    }
    getAll(req, res) {
        commentsService.getAll()
            .then(posts => {
                return res.json(posts);
            })
            .catch(e => {
                res.status(500).json(e);
                logger.error(e);
            });
    }
}

export default new CommentsController();