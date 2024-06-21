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
  updateUserRole,
  deleteUser,
  deleteProfile,
} from '../Controllers/userController.js';
import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';
import { uploadSingleFile } from '../Middlewares/multer.js';

const userRoute = express.Router();
// Admin Routes
userRoute
  .route('/admin/users')
  .get(isAuthenticated, authorizeAdmin, getAllUsers);
userRoute
  .route('/admin/user/:id')
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

// User Routes
userRoute.route('/register').post(uploadSingleFile, register);
userRoute.route('/login').post(login);
userRoute.route('/logout').get(logout);
userRoute
  .route('/profile')
  .get(isAuthenticated, getProfile)
  .delete(isAuthenticated, deleteProfile);
userRoute.route('/changepassword').put(isAuthenticated, changePassword);
userRoute.route('/updateprofile').put(isAuthenticated, updateProfile);
userRoute
  .route('/updateprofilepicture')
  .put(isAuthenticated, uploadSingleFile, updateProfilePicture);
userRoute.route('/forgetpassword').post(forgetPassword);
userRoute.route('/resetpassword/:token').put(resetPassword);
userRoute.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);
userRoute
  .route('/removefromplaylist')
  .delete(isAuthenticated, removeFromPlaylist);

export default userRoute;
