import { Router } from "express";
import postsController from "./postsController.js";


const postsRouter = new Router();

postsRouter.get('/posts', postsController.getAll)
postsRouter.get('/posts/:userId', postsController.getUserPosts)
postsRouter.post('/posts', postsController.create)
postsRouter.delete('/posts/:id', postsController.delete)
postsRouter.put('/posts', postsController.update)

export default postsRouter;