import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';
import { buySubscription } from '../Controllers/paymentController.js';

const paymentRoute = express.Router();

paymentRoute.route("/subscribe").post(isAuthenticated, buySubscription)

export default paymentRoute;
