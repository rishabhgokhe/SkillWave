import express from 'express';
import { getAllUsers, register, login, logout, getProfile, changePassword, updateProfile, forgetPassword, resetPassword } from '../Controllers/userController.js';
import { isAuthenticated } from '../Middlewares/auth.js'

const userRoute = express.Router();
userRoute.route('/users').get(getAllUsers)
userRoute.route('/register').post(register)
userRoute.route('/login').post(login)
userRoute.route('/logout').get(logout)
userRoute.route('/profile').get(isAuthenticated, getProfile)
userRoute.route('/changepassword').put(isAuthenticated, changePassword)
userRoute.route('/updateprofile').put(isAuthenticated, updateProfile)
userRoute.route('/forgetpassword').post(forgetPassword)
userRoute.route('/resetpassword/:token').put(resetPassword)

export default userRoute;