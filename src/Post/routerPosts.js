import { Router } from "express";
import postsController from "./postsController.js";


const postsRouter = new Router();

postsRouter.get('/posts', postsController.getAll)
postsRouter.post('/post/', postsController.create)
postsRouter.delete('/posts/:id/', postsController.delete)
postsRouter.put('/posts', postsController.update)

export default postsRouter;