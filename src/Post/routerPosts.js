import { Router } from "express";
import postsController from "./postsController.js";


const postsRouter = new Router();

postsRouter.get('/posts', postsController.getAll)
postsRouter.post('/posts', postsController.create)
postsRouter.delete('/posts/:id/', postsController.delete)
postsRouter.put('/posts', postsController.update)
postsRouter.get('/posts/:id', postsController.getAllComments)

export default postsRouter;