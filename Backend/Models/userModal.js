import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
        // enum: ["admin", "user"],
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


userSchema.pre("save", async function(next) {
    // checks if password is not modified then dont hash it again
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    // saves the hashed password
    this.password = hashedPassword;
})

userSchema.methods.getJWTToken = function () {
    return jwt.sign({_id: this._id},process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};

const User = mongoose.model("User", userSchema);

export default User;