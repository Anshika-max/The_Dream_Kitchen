import { createContext, useContext, useState } from "react";
import axios from "axios";
import server from "../environment";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  // Create axios client with Authorization header
  const client = axios.create({
    baseURL: `${server}/api/v1/carts`,
    withCredentials: true,
  });

  // Interceptor to attach token
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // or from cookies / context
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Fetch cart
  const fetchCart = async () => {
    try {
      const { data } = await client.get("");
      setCart(data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  // Add product
  const addToCart = async (productId, quantity = 1) => {
    try {
      const { data } = await client.post("/add", { productId, quantity });
      setCart(data.cart);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // Remove product
  const removeFromCart = async (productId) => {
    try {
      const { data } = await client.delete("/remove", {
        data: { productId },
      });
      setCart(data.cart);
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, fetchCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
