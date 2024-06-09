import catchAsyncError from '../Middlewares/catchAsyncError.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import User from '../Models/userModal.js';
import sendToken from '../Utils/sendToken.js';

export function getAllUsers(req, res, next) {
  res.send('running');
}

//-------------------------------------------------------------------------------------//
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  // const file = req.file;

  if (!name || !email || !password) {
    next(new ErrorHandler('Please enter all details', 400));
  }

  // checks if user already exist or not
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler('User already existed', 409));
  }

  // upload avatar to cloudinary
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'demo',
      url: 'demo',
    },
  });

  // successfuly creates an account and saves login cookie in browser for 10 days
  sendToken(res, user, 'Account Successfully created', 201);
});

//-------------------------------------------------------------------------------------//
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  // const file = req.file;

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
    return next(new ErrorHandler('Inncorrect password or email', 401));
  }

  // successfuly creates an account and saves login cookie in browser for 10 days
  sendToken(res, user, `Logged in successfully as ${user.name}`, 200);
});

//-------------------------------------------------------------------------------------//
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

//-------------------------------------------------------------------------------------//
export const getProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

//-------------------------------------------------------------------------------------//
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
    message: "password changes successfully"
  });
});


//-------------------------------------------------------------------------------------//
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user._id);
  console.log(user.name);
  if (name) user.name = name;
  if (email) user.email = email;

  user.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully"
  });
});
