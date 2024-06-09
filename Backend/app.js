import express from 'express';
import { config } from 'dotenv';
import handleError from './Middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

config({
    path: './Config/config.env'
});

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//importing routes
import courseRoute from './Routes/courseRoutes.js';
import userRoute from './Routes/userRoutes.js';

app.use('/api/v1', courseRoute);
app.use('/api/v1', userRoute);

export default app;


//error handling middleware used globaly
app.use(handleError);