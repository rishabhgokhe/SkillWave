import catchAsyncError from "../Middlewares/catchAsyncError.js";
import User from "../Models/userModal.js";
import ErrorHandler from "../Utils/ErrorHandler.js";


export const buySubscription = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    if (user.role === "admin") return next(new ErrorHandler("Admin dosn't need to buy subscription", 400));

    const plan_id = process.env.PLAN_ID;
    

})
