import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}....`)
});
