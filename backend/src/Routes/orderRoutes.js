import {Router} from "express";
import { getOrder,placeOrder } from "../Controller/orderController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.post("/place",placeOrder,authMiddleware);
router.get("/getOrder",getOrder);

export default router;