import express from 'express';
import {createCourse, getAllCourses} from '../Controllers/courseController.js';

const courseRoute = express.Router();

//get courses without lectures
courseRoute.route('/courses').get(getAllCourses);

// create course for admin only
courseRoute.route('/createcourse').post(createCourse);

export default courseRoute;
