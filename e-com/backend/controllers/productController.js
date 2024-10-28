
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";


const getProducts = asyncHandler(async(req, res) => {
    
    const products = await Product.find({});
    res.json(products);

});


const getProductById = asyncHandler(async(req, res) => {
    
    const product = await Product.findById(req.params.id);

    if(res.json(product)){
        res.json(product)
    }else{
        res.status(404).json({message:"Product not found"})
    }

})

export { getProducts, getProductById };