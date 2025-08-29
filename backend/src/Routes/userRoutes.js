import { Router } from "express";
import { login, register,getUser,getMe } from "../Controller/userController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";


const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/all").get(getUser);
router.get("/me", authMiddleware, getMe);


export default router;