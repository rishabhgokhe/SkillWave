import catchAsyncError from '../Middlewares/catchAsyncError.js';
import Course from '../Models/courseModal.js';
import ErrorHandler from '../Utils/ErrorHandler.js';
import getDataUri from '../Utils/dataUri.js';
import cloudinary from 'cloudinary';

//-------------------------------------------------------------------------------------
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  // sends back responce of all courses as responce without lectures array
  const courses = await Course.find().select('-lectures');
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

  // uploading file to cloud in cloudinary
  const cloudFile = await cloudinary.v2.uploader.upload(fileUri.content);

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
      public_id: cloudFile.public_id,
      url: cloudFile.url,
    },
  });

  res.status(201).json({
    success: true,
    message: 'Course successfully created',
  });
});

//-------------------------------------------------------------------------------------
export const deleteCourse = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;

  const course = await Course.findById(id);
  if (!course) return next(new ErrorHandler('Course not found', 404));

  await cloudinary.v2.uploader.destroy(course.poster.public_id);

  for (let i = 0; i < course.lectures.length; i++) {
    const lecture = course.lectures[i];
    await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
      resource_type: 'video',
    });
    console.log(lecture.video.public_id);
  }

  await course.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Course successfully deleted',
  });
});

//-------------------------------------------------------------------------------------
export const getCourseLectures = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) return next(new ErrorHandler('Course not found', 404));

  course.views += 1;
  await course.save();

  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

//-------------------------------------------------------------------------------------
export const uploadLectures = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;
  const file = req.file;

  const course = await Course.findById(req.params.id);

  if (!course) return next(new ErrorHandler('Course not found', 404));

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: 'Please enter all fields',
    });
  }

  const fileUri = getDataUri(file);
  // uploading file to cloud in cloudinary maximum video size 100MB in free version
  const cloudFile = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: 'video',
  });

  course.lectures.push({
    title,
    description,
    video: {
      public_id: cloudFile.public_id,
      url: cloudFile.secure_url,
    },
  });

  course.numOfVideos = course.lectures.length;

  await course.save();

  res.status(200).json({
    success: true,
    message: `Lecture added to the course. Lecture number = ${course.numOfVideos}`,
  });
});

//-------------------------------------------------------------------------------------
export const deleteLecture = catchAsyncError(async (req, res, next) => {
  const { courseID, lectureID } = req.query;

  const course = await Course.findById(courseID);
  if (!course) return next(new ErrorHandler('Course not found', 404));

  const lecture = course.lectures.find(i => {
    if (i._id.toString() === lectureID.toString()) return i;
  });
  if (!lecture) return next(new ErrorHandler('Lecture not found', 404));

  await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
    resource_type: 'video',
  });

  const newLectureArray = course.lectures.filter(i => {
    if (i._id.toString() !== lectureID.toString()) return i;
  });

  course.lectures = newLectureArray;
  course.numOfVideos = course.lectures.length;

  await course.save()
  
  res.status(200).json({
    success: true,
    message: 'Lecture successfully deleted',
  });
});
