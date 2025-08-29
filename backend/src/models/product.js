import mongoose, { Schema } from "mongoose";

const productScheme = new Schema(
    {
        productname: { type: String, required: true},
        description:{type:String},
        price:{type:Number, required:true },
        image: { type: String ,required:true },
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",   // reference Category model
          required: true,
        },
        stock: { type: Number, default: 0 }, // Quantity available
        isAvailable: { type: Boolean, default: true }, // Whether product is available
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }

)

const product = mongoose.model("product", productScheme);

export { product };