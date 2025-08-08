import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json()); // to parse JSON bodies (allows us to accept JSON data in req.body)

app.use('/api/products', productRoutes); // Mount the product routes on the /api/products path

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000 ");
});

