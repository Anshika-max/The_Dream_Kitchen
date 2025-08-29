import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Owner of the cart
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
        quantity: { type: Number, default: 1, min: 1 },
      },
    ],
    totalPrice: { type: Number, default: 0 }, // Auto-calculated
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export { Cart };
