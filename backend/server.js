import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.use(express.json()); // to parse JSON bodies (allows us to accept JSON data in req.body)

app.use('/api/products', productRoutes); // Mount the product routes on the /api/products path
// route for api products

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

