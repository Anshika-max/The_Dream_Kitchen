// import Stripe from "stripe";
// import dotenv from "dotenv";

// dotenv.config();
// import httpStatus from "http-status";
// import { Order } from "../models/order.js";
// import { product } from "../models/product.js"; 
// import User from "../models/user.js";

// // DEBUG: confirm Stripe key is loaded
// console.log("Stripe Key Loaded:", process.env.STRIPE_SECRET_KEY);

// // Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2024-06-20",
// });

// /**
//  * Create Stripe Checkout Session
//  * POST /api/v1/payments/create-checkout-session
//  * Body: { items: [{ product: <id>, quantity: number }], deliveryAddress: {...} }
//  * Auth: required (req.user.id from authMiddleware)
//  */
// export const createCheckoutSession = async (req, res) => {
//   try {
//     const { items, deliveryAddress } = req.body;

//     if (!items || items.length === 0) {
//       return res.status(httpStatus.BAD_REQUEST).json({ message: "No items in cart" });
//     }

//     // Build Stripe line_items from your product model
//     const line_items = [];
//     for (const item of items) {
//       const dbProduct = await product.findById(item.product);
//       if (!dbProduct) continue;

//       line_items.push({
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: dbProduct.productname,
//             description: dbProduct.description || "",
//           },
//           unit_amount: dbProduct.price * 100, // in paise
//         },
//         quantity: item.quantity,
//       });
//     }

//     // Save order in DB as pending
//     const order = new Order({
//       user: req.user.id,
//       items: items.map((i) => ({ product: i.product, quantity: i.quantity })),
//       totalPrice: line_items.reduce(
//         (sum, li) => sum + (li.price_data.unit_amount / 100) * li.quantity,
//         0
//       ),
//       deliveryAddress,
//       paymentMethod: "Card",
//       paymentStatus: "pending",
//       status: "pending",
//     });

//     await order.save();

//     // Create Stripe Checkout Session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items,
//       metadata: { orderId: order._id.toString() }, // link session to order
//       success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//     });

//     res.status(200).json({ sessionId: session.id });
//   } catch (err) {
//     console.error("Stripe checkout error:", err);
//     res.status(500).json({ message: "Stripe session creation failed" });
//   }
// };

// /**
//  * Stripe Webhook Handler
//  * POST /api/v1/payments/webhook
//  * Note: requires express.raw({ type: "application/json" }) in route
//  */
// export const stripeWebhook = async (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("Webhook signature verification failed:", err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   try {
//     switch (event.type) {
//       case "checkout.session.completed": {
//         const session = event.data.object;
//         const orderId = session.metadata?.orderId;
//         if (orderId) {
//           await Order.findByIdAndUpdate(orderId, {
//             paymentStatus: "paid",
//             status: "confirmed",
//           });
//         }
//         break;
//       }
//       case "checkout.session.async_payment_failed":
//       case "checkout.session.expired": {
//         const session = event.data.object;
//         const orderId = session.metadata?.orderId;
//         if (orderId) {
//           await Order.findByIdAndUpdate(orderId, {
//             paymentStatus: "failed",
//             status: "cancelled",
//           });
//         }
//         break;
//       }
//       default:
//         console.log(`Unhandled event type ${event.type}`);
//         break;
//     }

//     res.json({ received: true });
//   } catch (err) {
//     console.error("Webhook handler error:", err);
//     res.status(500).send("Webhook handler failed");
//   }
// };
