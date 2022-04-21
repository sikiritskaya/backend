import Comment from '../Comments/Comment.js';
import Post from './Post.js';

class PostsService {
    getAll() {
        return Post.find();
    }
    create(post) {
        Post.create(post);
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
    getAllComments(id){
        return Comment.find({ postId: id });
    }
}

export default new PostsService();