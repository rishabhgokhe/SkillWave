import express from 'express';
import { contact, requestCourseOrFeature } from '../Controllers/formControllers.js';

const formRoute = express.Router();

formRoute.route("/contact").post(contact);
formRoute.route("/request").post(requestCourseOrFeature);

export default formRoute;
