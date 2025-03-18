import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res,next) => {
   
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        console.log("in protect")
      token = req.headers.authorization.split(" ")[1];
      
    
      const decodedId = jwt.verify(token, process.env.JWT_SECRET);
      req.user =await User.findById(decodedId.id).select("-password");
      console.log("in protect"+req.user)
      next()
    } catch (error) {
        console.log(error.message)
      res.status(401);
      throw new Error("Not authorised,invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorised,no token");
  }
});
