import Comment from '../Comments/Comment.js';
import AuthUser from '../User/Auth/AuthUser.js';
import Post from './Post.js';

class PostsService {
    getAll() {
        return Post.find().populate('comments');
    }
    create(post) {
        return Post.create(post)
            .then(newPost => {
                return AuthUser.findByIdAndUpdate({ _id: newPost.userId }, {
                    $push: {
                        posts: {
                            _id: newPost._id
                        }
                    }
                }, {
                    new: true, useFindAndModify: false
                });
            })
            .then(result => {
                return result.posts;
            });
    }
    delete(id) {
        if (!id) {
            throw new Error('post did not find');
        }
        return Post.findByIdAndDelete(id)
            .then(deletedPost => {
                return AuthUser.findByIdAndUpdate({ _id: deletedPost.userId }, {
                    $pull: {
                        posts: {
                            _id: deletedPost._id
                        }
                    }
                }, {
                    new: true, useFindAndModify: false
                })
                    .then(result => {
                        return result.posts;
                    });
            });
    }
    update(post) {
        if (!post._id) {
            throw new Error('post did not find');
        }
        return Post.findByIdAndUpdate(post._id, post, { new: true });
    }
    getAllComments(id) {
        return Comment.find({ postId: id });
    }
}

export default new PostsService();