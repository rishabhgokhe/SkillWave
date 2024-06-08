import express from 'express';
import { getAllUsers } from '../Controllers/userController.js';

const userRoute = express.Router();
userRoute.route('/users').get(getAllUsers)

export default userRoute;