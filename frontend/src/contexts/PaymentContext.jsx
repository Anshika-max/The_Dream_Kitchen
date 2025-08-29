// // src/contexts/PaymentContext.jsx
// import React, { createContext, useState, useMemo, useEffect, useContext } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext.jsx";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// export const PaymentContext = createContext();

// export const PaymentProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const { cart } = useCart();

//   const [cartItems, setCartItems] = useState([]);
//   const [deliveryAddress, setDeliveryAddress] = useState(null);

//   // Sync backend cart to cartItems
//   useEffect(() => {
//     if (cart?.items) {
//       setCartItems(
//         cart.items.map((i) => ({
//           productId: i.product._id,
//           name: i.product.name,
//           price: i.product.price,
//           quantity: i.quantity,
//         }))
//       );
//     }
//   }, [cart]);

//   const totalPrice = useMemo(
//     () => cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0),
//     [cartItems]
//   );

//   const goToPaymentPage = () => navigate("/payment");

//   const handleCheckout = async (token) => {
//     if (!deliveryAddress || cartItems.length === 0) {
//       // alert("Cart or delivery address missing");
//       alert("Sorry !! Payment Gateway is yet not supported by our website.");
//       return;
//     }

//     try {
//       const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/payments/create-checkout-session`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ items: cartItems, deliveryAddress, totalPrice }),
//       });

//       const data = await res.json();
//       if (!res.ok) return alert(data.message || "Failed to create Stripe session");

//       const stripe = await stripePromise;
//       await stripe.redirectToCheckout({ sessionId: data.sessionId });
//     } catch (err) {
//       console.error("Stripe checkout error:", err);
//       alert("Something went wrong during Stripe checkout.");
//     }
//   };

//   return (
//     <PaymentContext.Provider value={{
//       cartItems,
//       setCartItems,
//       deliveryAddress,
//       setDeliveryAddress,
//       totalPrice,
//       goToPaymentPage,
//       handleCheckout,
//     }}>
//       {children}
//     </PaymentContext.Provider>
//   );
// };
