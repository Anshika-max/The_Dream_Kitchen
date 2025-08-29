import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./Routes/userRoutes.js"
import productRouter from "./Routes/productRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
// import paymentRouter, { paymentWebhook } from "./Routes/paymentRoutes.js";



const app = express();
app.set("port", process.env.PORT || 8000);

app.use(cors({
    origin: "https://the-dream-kitchenfrontend.onrender.com",  // your frontend URL
    credentials: true,                // allow cookies/headers
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
//all my connecting files
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);  
app.use("/api/v1/orders", orderRouter);    
app.use("/api/v1/categories", categoryRoutes);  
app.use("/api/v1/carts", cartRoutes);  
// app.use("/api/v1/payments", paymentRouter);  

// app.post("/api/v1/payments/webhook", express.raw({ type: "application/json" }), paymentWebhook);

const start = async() =>{
    app.set("mongo_user");
    const connectionDb = await mongoose.connect(
        "mongodb+srv://anshika82d:gzzxoyHOdg9ogDj4@cluster0.s6vzgdp.mongodb.net/"
    );
    console.log(`Mongo connected DB Host : ${connectionDb.connection.host}`);
    app.listen(app.get("port"), () => {
        console.log("Listen to port 8000");
    });
}

start();