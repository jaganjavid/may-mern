import Product from "../models/product.js";


// GET ALL Products

export const getProducts = async(req, res) => {

    const products = await Product.find({});

    res.status(200).json(products);

}

// Create a new Product
export const newProducts = async (req, res) => {

    console.log(req.body);

    const product = await Product.create(req.body);

    res.status(201).json({
        product
    })

}

// Get Product Details
export const getProductDetails = async (req, res) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404).json({
            error:"Product not found"
        })
    }

    res.status(200).json({product});

}

// Update Products
export const updateProduct = async(req, res) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        res.status(404).json({
            error:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

    res.status(200).json({product});

}

// Delete Products
export const deleteProduct = async(req, res) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        res.status(404).json({
            error:"Product not found"
        })
    }

    product = await Product.deleteOne();

    res.status(200).json({
        message:"Product Deleted"
    });

}