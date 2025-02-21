import express from 'express';
import products from './data/products.js'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

const app=express();
dotenv.config();
connectDB()

app.use('/api/products',productRoutes)



app.listen(5000,console.log('in server.js'))
