import express from 'express';
import {
  addLectures,
  createCourse,
  getAllCourses,
  getCourseLectures,
} from '../Controllers/courseController.js';
import { uploadSingleFile } from '../Middlewares/multer.js';

const courseRoute = express.Router();

//get courses without lectures
courseRoute.route('/courses').get(getAllCourses);
courseRoute.route('/createcourse').post(uploadSingleFile, createCourse);
courseRoute
  .route('/course/:id')
  .get(getCourseLectures)
  .post(uploadSingleFile, addLectures);

export default courseRoute;
