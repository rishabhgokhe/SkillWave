import catchAsyncError from '../Middlewares/catchAsyncError.js';
import Course from '../Models/courseModal.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import getDataUri from '../Utils/dataUri.js';
import cloudinary from 'cloudinary';

//-------------------------------------------------------------------------------------
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  // sends back responce of all courses as responce without lectures array
  const courses = await Course.find().select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});


//-------------------------------------------------------------------------------------
export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  const file = req.file;

  const fileUri = getDataUri(file);

  // test image upload api in postman
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

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
      public_id: myCloud.public_id ,
      url: myCloud.url,
    },
  });

  res.status(201).json({
    success: true,
    message: 'Course successfully created',
  });
});

//-------------------------------------------------------------------------------------
export const getCourseLectures = catchAsyncError(async (req, res, next) => {

  const course = await Course.findById(req.params.id);

  if (!course) return next(new ErrorHandler("Course not found", 404));

  course.views += 1;
  await course.save();
  
  res.status(200).json({
    success: true,
    lectures: course.lectures
  })
});

//-------------------------------------------------------------------------------------
export const addLectures = catchAsyncError(async (req, res, next) => {

  const {title, description} = req.body;
  const file = req.file;

  const course = await Course.findById(req.params.id);

  if (!course) return next(new ErrorHandler("Course not found", 404));

  course.lectures.push({
    title,description,video: {
      public_id: 'demo',
      url: 'demo'
    }
  });

  course.numOfVideos = course.lectures.length;

  await course.save();
  
  res.status(200).json({
    success: true,
    message: 'Lecture added to the course'
  })
});