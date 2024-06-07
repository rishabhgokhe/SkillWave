import express from 'express';
import { getAllCourses } from '../Controllers/courseController';

const router = express.Router();
router.route('/courses').get(getAllCourses);

export default router;
