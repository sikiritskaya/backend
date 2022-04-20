import Comment from "./Comment.js"

class CommentsService {

    async create(comment) {
        const createdComment = await Comment.create(comment)
        return createdComment
    }
    async delete(id) {
        if (!id) {
            throw new Error("post didn't find")
        }
        const deletedComment = await Comment.findByIdAndDelete(id)
        return deletedComment
    }
    async update(comment) {
        if (!comment._id) {
            throw new Error("post didn't find")
        }
        const commentUpdate = await Comment.findByIdAndUpdate(comment._id, comment, { new: true })
        return commentUpdate
    }

}

export default new CommentsService()