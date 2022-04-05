import { Router } from "express";
import userController from "./userController.js";

const router = new Router();

router.post('/users', userController.create)
router.delete('/users/:id', userController.delete)
router.put('/users', userController.update)

export default router;