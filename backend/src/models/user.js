import mongoose, { Schema } from "mongoose";

const userScheme = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        location: {type: String,required: true},
        password: { type: String, required: true },
        token: { type: String },
        role: { type: String, enum: ["user", "admin"], default: "user" }
    },
    { timestamps: true }
)

const User = mongoose.model("User", userScheme);

export default  User;