import db from '../../db/index.js';

const Post = db.post;

class PostsService {
    getAll() {
        return Post.findAll();
    }
    create(post) {
        return Post.create(post);
    }
    delete(id) {
        if (!id) {
            throw new Error('post did not find');
        }
        return Post.destroy({ where: { id } });  //returned 1?
    }
    update(post) {
        if (!post.id) {
            throw new Error('post did not find');
        }
        return Post.update({ title: post.title, body: post.body, updatedAt: post.updatedAt }, {
            where: {
                id: post.id
            }
        });  //[1]?
    }
    getAllPosts(id) {
        return Post.findAll({ where: { userId: id } });
    }
}

export default new PostsService();