// // routes/paymentRoutes.js
// import { Router } from "express";
// import authMiddleware from "../middleware/AuthMiddleware.js";
// import { createCheckoutSession, stripeWebhook } from "../Controller/paymentController.js";
// import express from "express";

// const router = Router();

// // Export the raw webhook handler to be mounted in app.js
// export const paymentWebhook = [
//   express.raw({ type: "application/json" }), // raw body here (only on this path)
//   stripeWebhook,
// ];

// // Protected – user must be logged in
// router.post("/create-checkout-session", authMiddleware, createCheckoutSession);

// export default router;
