import httpStatus from "http-status";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // ✅ use JWT

// ------------------ LOGIN ------------------
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Provide username and password" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }

    // ✅ Generate JWT instead of random string
    const token = jwt.sign(
      { id: user._id,role: user.role }, // payload
      process.env.JWT_SECRET,            // secret key
      { expiresIn: "1h" }                // token expiry
    );

    return res.status(httpStatus.OK).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        location: user.location,
        role: user.role,
      },
    });
  } catch (e) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong ${e}` });
  }
};

// ------------------ REGISTER ------------------
const register = async (req, res) => {
  const { name, username, password, email, location } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      email,
      location,
      role: "user",
    });

    await newUser.save();
    return res
      .status(httpStatus.CREATED)
      .json({ message: "User Registered Successfully" });
  } catch (e) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong ${e}` });
  }
};

// ------------------ GET ALL USERS ------------------
const getUser = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude password
    return res.status(httpStatus.OK).json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error while fetching users" });
  }
};

// ------------------ GET CURRENT USER ------------------
const getMe = async (req, res) => {
  try {
    // req.user was set in authMiddleware after decoding JWT
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }
    return res.status(httpStatus.OK).json({ user });
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching user info" });
  }
};

export { login, register, getUser, getMe };
