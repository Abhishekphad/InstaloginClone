const {userModel}=require("../model/Usermodel");
const bcypt= require("bcryptjs");
const mongoose= require("mongoose");
const JWT= require("jsonwebtoken");
const e=require("express");


// Register
exports.signup=async(req,res,next)=>{
    try {
        const newuser=await userModel.create(req.body);
        res.status(200).send({msg:"Signup Success"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}


// login
exports.login=async(req,res)=>{
    const{username,password}=req.body;
    try {
        const result= await bcrypt.compare(password,getuserData.password)
            if(result){

                const token = await getuserData.jwtToken()
                const cookieOption = {
                    maxAge: 24 * 60 * 60 * 1000, //24hr
                    
                    httpOnly: true //  not able to modify  the cookie in client side
                  };
              
                  res.cookie("token", token, cookieOption);
                  res.status(200).json({
                    success: true,
                    data: getuserData
                  });

            }else{
                res.status(404).send({msg:"Password is Incorrect, Try Again!"})
            }
    } catch (error) {
        res.status(400).send({msg:"Account not found ......!"})
    }
}


// Details

exports.userdetails=async(req,res)=>{
    const{id,username}=req.user;
    try {
        const userdata= await userModel.findOne({username});
        res.status(200).send({
            msg:"success",
            data:userdata
        })
    } catch (error) {
        res.status(400).send({
            msg:error.message
        })
    }
}
// module.exports={
//     signup
// }