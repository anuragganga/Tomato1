import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanyam859:1234@cluster0.wd4gomm.mongodb.net/Tomato').then(()=>{console.log("connected")});
}