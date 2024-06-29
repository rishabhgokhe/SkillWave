import app from './app.js';
import dbConnection from './Utils/dataBase.js';
import cloudinary from 'cloudinary';
import Razorpay from "razorpay";

//set up connection with mongo database
dbConnection();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API_KEY,
  api_secret: process.env.CLOUDINARY_CLIENT_API_SECRET,
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
})

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
