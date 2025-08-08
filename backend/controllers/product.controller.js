import Product from '../models/product.model.js'; // defined Product model must need to be imported
import mongoose from 'mongoose'; // mongoose is used to validate the id of the product

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // find all products
        res.status(200).json({ success: true, data: products });
        // 200 is success
    } catch (error) {
        console.error('Error in fetching products:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
        // 500 is internal server error
    }
};

export const createProduct =  async (req , res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json ({success: false, message: "Please provide all required fields: name, price, image"})
        // 400 is bad request for user
    }
    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
        // 201 is created successfully
    } catch (error) {
        console.error('Error in creating product:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
        // 500 is internal server error
    }
};

export const deleteProduct =  async (req, res) => {
    const {id} = req.params; // get the id from the request params
    try {
        await Product.findByIdAndDelete(id); // find the product by id and delete it
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
        // 200 is success
    } catch (error) {
        console.error('Error in deleting product:', error.message);
        res.status(404).json({ success: false, message: 'Product Not Found' });
        // 404 is internal server error
    }
};

export const updateProduct = async (req, res)=> {
    const { id } = req.params; // get the id from the request params
    
    const product = req.body; // get the product data from the request body
    
    if (mongoose.isValidObjectId(id) === false) {
        return res.status(400).json({ success: false, message: 'Invalid product ID' });
        // 400 is bad request for user
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate (id, product , { new: true }); // find the product by id and update it
        res.status(200).json({ success: true, data: updateProduct });
        // 200 is success
    }
    catch (error) {
        console.error('Error in updating product:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
        // 500 is internal server error
    }
};