import express from 'express';

import 'dotenv/config';
import morgan from 'morgan';
import { connectDB } from './connect.js';
import { PORT } from './config.js';
// Generate random : node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
import { secretDB } from './config.js';
import MongoStore from 'connect-mongo';
import UserRouter from './routes/user.js';
import ProductRouter from './routes/product.js';

const app = express();

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

/* -------------- SESSION SETUP ----------------*/
/*app.use(
  session({
    secret: secretDB,
    resave: false, //don't save session if unmodified
    saveUninitialized: true, //  create session until something stored
    store: MongoStore.create({
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'ecommerce-coderhouse(FP)', // Specify the database name here
      collectionName: 'sessions',
      ttl: 10000,
    }),
  })
);*/

app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
/*app.use('/api/cart', CartRouter);*/

app.listen(PORT, () => {
  console.log(`Servidor Express Puerto ${PORT}`);
});

// Static files ->  the location of the "publix" folder
app.use(express.static(path.join(__dirname, 'public')));

// Call the function to connect to the database
connectDB();
