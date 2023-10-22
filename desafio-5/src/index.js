import express from 'express';
import 'dotenv/config';
import { connectDB } from './connect.js';
import { PORT } from './config.js';
import UserRouter from './routes/user.js';

const app = express();

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', UserRouter);
/*app.use('/api/cart', CartRouter);*/

app.listen(PORT, () => {
  console.log(`Servidor Express Puerto ${PORT}`);
});

// Call the function to connect to the database
connectDB();
