import catchAsyncError from '../Middlewares/catchAsyncError.js';
import Course from '../Models/courseModal.js';
import ErrorHandler from '../Utils/ErrorHandler.js';

// sends back responce of all courses as responce without lectures array
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});


// creates a new course base on below paramters
export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
//   const file = req.file;

  if (!title || !description || !category || !createdBy) {
    return res.status(400).json({
      success: false,
      message: 'Please enter all fields',
    });
  }

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: 'demo',
      url: 'demo',
    },
  });

  res.status(201).json({
    success: true,
    message: 'Course successfully created',
  });
});
