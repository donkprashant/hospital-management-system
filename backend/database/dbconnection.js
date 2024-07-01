import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HOSPITAL"
    }).then(()=>{
        console.log("Connected to database!")
    }).catch((err)=>{
        console.log('some error occured while connecting to database:${err}')
    });
};