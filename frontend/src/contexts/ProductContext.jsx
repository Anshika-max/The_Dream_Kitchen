import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";
import server from "../environment";


export const ProductContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/products`,
});

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  // Fetch all products
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await client.get("/getPro"); // backend route
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add product
  const addProduct = async (newProduct) => {
    try {
      const res = await client.post("/add", newProduct);
      if (res.status === httpStatus.CREATED) {
        setProducts((prev) => [...prev, res.data]);
        return res.data.message;
      }
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await client.delete(`/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const data = {
    products,
    loading,
    deleteProduct,
    addProduct,
    getProducts,
  };

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
};
