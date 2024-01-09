import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'
//Second appraoch

dotenv.config({
    path:"./env"
})
connectDB()

//First approach is to connect to the database in the index.js file 
// import express from "express";

// const app=express();

// ;(async()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//       app.on('error',(err)=>{
//         console.log(err);
//       })
//       app.listenerCount(process.env.PORT,()=>{
//         console.log(`listening on port ${process.env.PORT} `)
//       })
//     }catch{
//         console.log("error connecting to db")
//     }
// })()

