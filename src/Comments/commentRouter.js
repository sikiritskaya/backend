import { Router } from "express";
import commentsController from "./commentsController.js";

const commentsRouter = new Router();

commentsRouter.post('/comments', commentsController.create)
commentsRouter.delete('/comments/:id/', commentsController.delete)
commentsRouter.put('/comments', commentsController.update)

export default commentsRouter;