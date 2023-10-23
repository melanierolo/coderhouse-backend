import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import { connectDB } from './connect.js';
import { PORT } from './config.js';
import UserRouter from './routes/user.js';
import ProductRouter from './routes/product.js';

const app = express();

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
/*app.use('/api/cart', CartRouter);*/

app.listen(PORT, () => {
  console.log(`Servidor Express Puerto ${PORT}`);
});

// Call the function to connect to the database
connectDB();
