import jwt from 'jsonwebtoken';
import catchAsyncError from './catchAsyncError.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import User from '../Models/userModal.js';

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const {Token} = req.cookies;
    if (!Token) return next(new ErrorHandler("User is not logged in", 401));
    const decode = jwt.verify(Token, process.env.JWT_SECRET);

    // we can get user id from decode because we have used {_id: this._id} when signing jwt token
    req.user = await User.findById(decode._id);

    // here it passes to next middleware getProfile in userController.js
    next();
})