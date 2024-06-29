import mongoose from "mongoose";

const dbConnection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('database connected')
}

export default dbConnection;