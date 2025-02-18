import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requiered: true,
        unique: true,
    },
    email: {
        type: String,
        requiered: true,
        unique: true,
    },
    password: {
        type: String,
        requiered: true,
    },
}, {timestamps: true});

const User  = mongoose.model('User', userSchema);

export default User;