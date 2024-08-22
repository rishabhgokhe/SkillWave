import express from 'express';
import { config } from 'dotenv';
import handleError from './Middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

config({
  path: './Config/config.env',
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  );  

//importing routes
import courseRoute from './Routes/courseRoutes.js';
import userRoute from './Routes/userRoutes.js';
// import paymentRoute from './Routes/paymentRoutes.js';
import formRoute from './Routes/formRoutes.js';

app.use('/api/v1', courseRoute);
app.use('/api/v1', userRoute);
// app.use('/api/v1', paymentRoute);
app.use('/api/v1', formRoute);

export default app;

//error handling middleware used globaly
app.use(handleError);
