import Comment from './Comment.js';

class CommentsService {

    create(comment) {
        const createdComment = Comment.create(comment);
        return createdComment;
    }
    async delete(id) {
        if (!id) {
            throw new Error('post did not find');
        }
        const deletedComment = Comment.findByIdAndDelete(id);
        return deletedComment;
    }
    update(comment) {
        if (!comment._id) {
            throw new Error('post did not find');
        }
        const commentUpdate = Comment.findByIdAndUpdate(comment._id, comment, { new: true });
        return commentUpdate;
    }

}

export default new CommentsService();