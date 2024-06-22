import express from 'express';
import { isAuthenticated } from '../Middlewares/auth.js';
import { buySubscription, cancelSubscription, paymentVerification } from '../Controllers/paymentController.js';

const paymentRoute = express.Router();

paymentRoute.route("/subscribe").post(isAuthenticated, buySubscription)
paymentRoute.route("/paymentverification").post(isAuthenticated, paymentVerification)
paymentRoute.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)


export default paymentRoute;
