import httpStatus from "http-status"
import {Order} from "../models/order.js"

//Add a order
const placeOrder = async (req, res) => {
  try {
    const userId = req.user._id; // assuming you have auth middleware
    const { items, totalPrice, deliveryAddress } = req.body;

    const order = await Order.create({
      user: userId,
      items,
      totalPrice,
      deliveryAddress,
      paymentMethod: "Card", // or from frontend
    });

    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//get a order
const getOrder = async (req , res) => {
    try{
        const orders = await Order.find();
        res.status(httpStatus.OK).json(orders);
    }
    catch (e) 
    {
        return res.status(500).json({ message: `Something went wrong ${e}` });
    }
}


export { placeOrder,getOrder }