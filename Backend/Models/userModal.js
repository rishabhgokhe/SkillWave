import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: validator.isEmail,
    },
    password: {
        type: String,
        enum: ["admin", "user"],
        minLength: [10, 'Password must be atleast 10 Characters'],
        select: false
    },
    role: {
        type: String,
        required: [true, 'Please enter your password'],
        default: "user"
    },
    subscription: {
        id: String,
        status: String
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    playlist: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "courseModal"
            },
            poster: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    ResetPasswordToken: String,
    ResetPasswordExpire: String
})

const User = mongoose.model("User", userSchema);

export default User;