import app from './app.js';
import dbConnection from './Config/dataBase.js';
import cloudinary from 'cloudinary';

//set up connection with mongo database
dbConnection();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API_KEY,
  api_secret: process.env.CLOUDINARY_CLIENT_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
