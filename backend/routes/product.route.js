import express from 'express';

import { getProducts,createProduct , deleteProduct, updateProduct} from '../controllers/product.controller.js'; // getProducts is imported from the product.controller.js

const router = express.Router();

// read products we use get method to get all products
router.get("/", getProducts); // getProducts is imported from the product.controller.js

// create sth we use post method 
router.post( "/", createProduct);

// id want to delete the product
router.delete("/:id",deleteProduct); // deleteProduct is imported from the product.controller.js

// use put method to update the product
router.put("/:id", updateProduct);

export default router;