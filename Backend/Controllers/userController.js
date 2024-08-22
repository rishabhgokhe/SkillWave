import catchAsyncError from '../Middlewares/catchAsyncError.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import User from '../Models/userModal.js';
import sendToken from '../Utils/sendToken.js';
import { sendEmail } from '../Utils/sendEmail.js';
import crypto from 'crypto';
import Course from '../Models/courseModal.js';
import getDataUri from '../Utils/dataUri.js';
import cloudinary from 'cloudinary';

//---------------------------- Admin Controllers --------------------------------------
export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});

//-------------------------------------------------------------------------------------
export const updateUserRole = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const currentUserId = req.user._id.toString();

  if (!user) return next(new ErrorHandler('User not found', 404));

  if (currentUserId === req.params.id)
    return next(new ErrorHandler('You cannot demote yourself', 400));

  if (user.role === 'user') {
    user.role = 'admin';
  } else {
    user.role = 'user';
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Role Successfully updated.',
  });
});

//-------------------------------------------------------------------------------------
export const deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const currentUserId = req.user._id.toString();

  if (!user) return next(new ErrorHandler('User not found', 404));
  if (currentUserId === req.params.id)
    return next(
      new ErrorHandler('You cannot delete your account you are admin', 400)
    );

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);
  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: 'User deleted',
  });
});

//--------------------------------User Controllers--------------------------------------
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    next(new ErrorHandler('Please enter all details', 400));
  }

  // checks if user already exist or not
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler('User already existed', 409));
  }

  const file = req.file;
  const fileUri = getDataUri(file);
  const cloudFile = await cloudinary.v2.uploader.upload(fileUri.content);

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: cloudFile.public_id,
      url: cloudFile.secure_url,
    },
  });

  // successfuly creates an account and saves login cookie in browser for 10 days
  sendToken(res, user, 'Account Successfully created', 201);
});

//-------------------------------------------------------------------------------------
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(new ErrorHandler('Please enter all details', 400));
  }

  const user = await User.findOne({ email }).select('+password');
  // checks if user already exist or not
  if (!user) {
    return next(new ErrorHandler("User dosen't exist", 401));
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new ErrorHandler('Incorrect password or email', 401));
  }

  // successfuly creates an account and saves login cookie in browser for 10 days
  sendToken(res, user, `Logged in successfully as ${user.name}`, 200);
});

//-------------------------------------------------------------------------------------
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie('Token', null, {
      expires: new Date(Date.now()),
    })
    .json({
      successs: true,
      message: 'logged out successfully',
    });
});

//-------------------------------------------------------------------------------------
export const getProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

//-------------------------------------------------------------------------------------
export const deleteProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);
  await user.deleteOne();

  res
    .status(200)
    .cookie('Token', null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: 'Profile deleted',
    });
});

//-------------------------------------------------------------------------------------
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    next(new ErrorHandler('Please enter all feilds', 400));
  }

  const user = await User.findById(req.user._id).select('+password');

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) {
    next(new ErrorHandler('Incorrect old password', 400));
  }

  // here we do not require to hash password as when saving user it will use pre save method in userModal and check if it is modified then save new hashed password
  user.password = newPassword;
  user.save();

  res.status(200).json({
    success: true,
    message: 'password changes successfully',
  });
});

//-------------------------------------------------------------------------------------
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user._id);
  // upadate name or email in your profile
  if (name) user.name = name;
  if (email) user.email = email;

  user.save();

  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
  });
});

//-------------------------------------------------------------------------------------
export const updateProfilePicture = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const file = req.file;
  const fileUri = getDataUri(file);
  const cloudFile = await cloudinary.v2.uploader.upload(fileUri.content);

  // delete old avatar from cloudinary
  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  user.avatar = {
    public_id: cloudFile.public_id,
    url: cloudFile.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Profile Picture updated successfully',
  });
});

//-------------------------------------------------------------------------------------
export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler('User dosent exist with this email', 400));

  const resetToken = await user.getResetToken();

  await user.save();

  const url = `${process.env.WEBSITE_URL}/resetpassword/${resetToken}`;

  const message = `Click on the link to reset password ${url} If you have not requested then report this mail.`;
  await sendEmail(user.email, 'SkillWave: Reset Password', message, res);

  res.status(200).json({
    success: true,
    message: `Reset token sent to ${email}`,
  });
});

//-------------------------------------------------------------------------------------
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) next(new ErrorHandler('Invalid or Expired Token', 404));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password Updated Successfully',
  });
});

//-------------------------------------------------------------------------------------
export const addToPlaylist = catchAsyncError(async (req, res, next) => {
  // here we can get user info as in route we used isAuthenticated with addToPlaylist and when authenticating user with cookies we generated jwt token with _id and in decoding the cookie we can get hold of user _id (for more details see auth.js)
  const user = await User.findById(req.user._id);

  const course = await Course.findById(req.body.id);

  if (!course) return next(new ErrorHandler('Course not found', 404));

  const courseExists = user.playlist.find(item => {
    if (item.course.toString() === course._id.toString()) return true;
  });

  if (courseExists)
    return next(new ErrorHandler('Course Already added to playlist', 409));

  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Course Added to Playlist',
  });
});

//-------------------------------------------------------------------------------------
export const removeFromPlaylist = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const course = await Course.findById(req.query.id);

  if (!course) return next(new ErrorHandler('Course not found', 404));

  const newPlaylist = user.playlist.filter(item => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.playlist = newPlaylist;
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Course Removed from Playlist',
  });
});
