import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js"

export const authUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const user =await User.findOne({email})
    

    if(user && await user.matchPassword(password)){
        return res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)



        })
    }
    else{
        res.status(404)
        throw new Error('Invalid email or password')
    }

})