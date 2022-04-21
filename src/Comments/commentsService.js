import Comment from './Comment.js';

class CommentsService {

    create(comment) {
        return Comment.create(comment);
    }
    async delete(id) {
        if (!id) {
            throw new Error('post did not find');
        }
        return Comment.findByIdAndDelete(id);
    }
    update(comment) {
        if (!comment._id) {
            throw new Error('post did not find');
        }
        return Comment.findByIdAndUpdate(comment._id, comment, { new: true });
    }

}

export default new CommentsService();