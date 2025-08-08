import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    }, 
    price: {
        type : Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true // createdAt , updatedAt fields will be added automatically
    }
);

const Product = mongoose.model('Product', productSchema);
// create the product (Prduct) inside the productSchema
// which require name , price and image as the fields in the productSchema

export default Product;
