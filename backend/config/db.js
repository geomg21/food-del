import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://geomathewgeorge21:food12062000@cluster0.5u9wg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


