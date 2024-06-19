import express from 'express';
import {
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
  uploadLectures,
} from '../Controllers/courseController.js';
import { uploadSingleFile } from '../Middlewares/multer.js';
import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';

const courseRoute = express.Router();

//get courses without lectures
courseRoute.route('/courses').get(getAllCourses);
courseRoute.route('/createcourse').post(isAuthenticated, authorizeAdmin, uploadSingleFile, createCourse);
courseRoute
  .route('/course/:id')
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, uploadSingleFile, uploadLectures)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);
courseRoute.route("/lecture").delete(isAuthenticated, authorizeAdmin ,deleteLecture);

export default courseRoute;
