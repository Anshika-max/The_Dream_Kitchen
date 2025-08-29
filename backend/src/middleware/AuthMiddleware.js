import jwt from "jsonwebtoken";
import User from "../models/user.js"; // adjust path if necessary

// Middleware to verify JWT and attach user to req
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // extract token part

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");

    // Fetch user from DB (without password)
    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // attach user to request
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
