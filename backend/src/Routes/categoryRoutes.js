import express from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
  getCategoryById,
} from "../Controller/categoryController.js";

const router = express.Router();

// Protected routes
router.post("/", createCategory);   // only logged-in users can create
router.delete("/:id", deleteCategory); // only logged-in users can delete

// Public routes
router.get("/", getCategories);       // anyone can see all categories
router.get("/:id", getCategoryById);  // anyone can see a category by ID

export default router;
