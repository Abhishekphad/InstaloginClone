const mongoose= require('mongoose');
require("dotenv").config();

const connectDB= () =>{
    mongoose
        .connect(process.env.MONGO_URL)
        .then((data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((err)=>{
            console.log("ERROR While connecting to DB",err.message);
        })
}
module.exports= connectDB;