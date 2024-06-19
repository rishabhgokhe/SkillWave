import express from 'express';
import {
  getAllUsers,
  register,
  login,
  logout,
  getProfile,
  changePassword,
  updateProfile,
  forgetPassword,
  resetPassword,
  addToPlaylist,
  removeFromPlaylist,
  updateProfilePicture,
} from '../Controllers/userController.js';
import { isAuthenticated } from '../Middlewares/auth.js';
import { uploadSingleFile } from '../Middlewares/multer.js'

const userRoute = express.Router();
userRoute.route('/users').get(getAllUsers);
userRoute.route('/register').post(uploadSingleFile ,register);
userRoute.route('/login').post(login);
userRoute.route('/logout').get(logout);
userRoute.route('/profile').get(isAuthenticated, getProfile);
userRoute.route('/changepassword').put(isAuthenticated, changePassword);
userRoute.route('/updateprofile').put(isAuthenticated, updateProfile);
userRoute.route('/updateprofilepicture').put(isAuthenticated, uploadSingleFile, updateProfilePicture);
userRoute.route('/forgetpassword').post(forgetPassword);
userRoute.route('/resetpassword/:token').put(resetPassword);
userRoute.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);
userRoute.route('/removefromplaylist').delete(isAuthenticated, removeFromPlaylist);

export default userRoute;
