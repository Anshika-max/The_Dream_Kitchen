import { Cart } from "../models/cart.js";
import { product } from "../models/product.js"; // product model

// ✅ Add to Cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware
    const { productId, quantity } = req.body;

    // 1. Validate product exists
    const products = await product.findById(productId);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 2. Find user cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // If no cart → create new
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
        totalPrice: products.price * quantity, // ✅ FIX: use products.price
      });
    } else {
      // If cart exists → check if product already inside
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        // Already in cart → update qty
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Not in cart → add new item
        cart.items.push({ product: productId, quantity });
      }

      // ✅ Recalculate total price
      cart.totalPrice = await calculateTotal(cart.items);
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Helper to recalc total
const calculateTotal = async (items) => {
  let total = 0;
  for (const item of items) {
    const products = await product.findById(item.product);
    if (products) {
      total += products.price * item.quantity; // ✅ FIX: use products.price
    }
  }
  return total;
};

// ✅ Get cart for logged-in user
export const getCart = async (req, res) => {
  try {
     if (!req.user) {
      return res.status(401).json({ message: "Unauthorized, user missing" });
    }
    const userId = req.user._id;
    console.log("Fetching cart for user:", userId);
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    console.log(cart);
    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove product from items
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    // Recalculate total
    cart.totalPrice = await calculateTotal(cart.items);

    await cart.save();
    res.status(200).json({ message: "Item removed", cart });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
