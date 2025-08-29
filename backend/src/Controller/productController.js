import httpStatus from "http-status"
import { product } from "../models/product.js"

//Add a product
const addProduct = async(req,res)=>{
    try{
        const newProduct = new product(req.body);
        await newProduct.save();
        res.status(httpStatus.CREATED).json({message:"Product Added",newProduct});        
    }
    catch(e){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Something went wrong ${e}` });
    }
}

//get a product
const getProduct = async (req , res) => {
    try{
      const products = await product.find().populate("category", "name");
        res.status(httpStatus.OK).json(products);
    }
    catch (e) 
    {
        return res.status(500).json({ message: `Something went wrong ${e}` });
    }
}

//Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting product", error });
  }
};


export { addProduct,getProduct,deleteProduct }