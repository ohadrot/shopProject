import express from 'express';
import productsRouter from './routers/productsRouter.js'
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors'



const app = express();
const PORT = process.env.PORT ||  3000;

app.use(cors())
dotenv.config();

connectDb();






app.use('/products',productsRouter)










app.listen(PORT,()=>{console.log('server is listen')})