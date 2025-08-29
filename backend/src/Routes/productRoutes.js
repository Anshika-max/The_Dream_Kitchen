import {Router} from "express";
import { addProduct,deleteProduct,getProduct } from "../Controller/productController.js";

const router = Router();

router.post("/add",addProduct);
router.delete("/:id", deleteProduct);
router.get("/getPro",getProduct);

export default router;
