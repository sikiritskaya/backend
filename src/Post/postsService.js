const db = import("../../db");
const Post = db.post;

class PostsService {
    getAll() {
        return Post.find().populate({path: 'comments', select: 'author body'});
    }
    create(post) {
        return Post.create(post);
    }
    delete(id) {
        if (!id) {
            throw new Error('post did not find');
        }
        return Post.findByIdAndDelete(id);
    }
    update(post) {
        if (!post._id) {
            throw new Error('post did not find');
        }
        return Post.findByIdAndUpdate(post._id, post, { new: true });
    }
    getAllPosts(id) {
        return Post.find({ userId: id }).populate('userId', 'username -_id');
    }
}

export default new PostsService();