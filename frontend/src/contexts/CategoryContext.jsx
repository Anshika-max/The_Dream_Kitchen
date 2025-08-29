import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import httpStatus from "http-status";
import server from "../environment";


export const CategoryContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/categories`,
});

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all categories
  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await client.get("/");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add category
  const addCategory = async (newCategory) => {
    try {
      const res = await client.post("/", newCategory);
      if (res.status === httpStatus.CREATED) {
        setCategories((prev) => [...prev, res.data]);
        return res.data.message;
      }
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  // Delete category
  const deleteCategory = async (id) => {
    try {
      await client.delete(`/${id}`);
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const data = {
    categories,
    loading,
    addCategory,
    deleteCategory,
    getCategories,
  };

  return (
    <CategoryContext.Provider value={data}>
      {children}
    </CategoryContext.Provider>
  );
};
