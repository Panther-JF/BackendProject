import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./.env'
})
// "-r dotenv/config --experimental-json-modules" is written in script in package.json file so that improt dotenv can work properly.

connectDB()

















// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
//import express from "express"
// const app=express()
// 
// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.error("ERROR: ",error)
//         throw err
//     }

// }) ()  

// these kind of functions are called Immediately Invoked Function Expressions (IIFEs) they execute as soon as they are defined usually starts with semi - colon to avoid any errors.

// there are generally two kind of approaches to connect db to the project :
// one is this (commented one) in which the code is written in index.js file 
// another method is to create a different file in db folder write the function in that file export it , import it in index file and just execute it.