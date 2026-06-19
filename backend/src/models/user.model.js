import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 1,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
        maxLength: 50
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

},
    {
        timestamps: true
    }
)
export const User = mongoose.model("User", userScheme)