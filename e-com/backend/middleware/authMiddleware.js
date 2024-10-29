import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";

// Protect routes

const protect = asyncHandler(async(req, res, next) => {

    let token = req.cookies.jwt;

    if(!token){
        res.status(401);
        throw new Error("Not auth, no token")
    }

    try{
        const decoded = jwt.verify(token,"jknsakjsankajsnk");
        console.log(decoded);
        req.user = await User.findById(decoded.userId).select("-password");
        next();
    }catch(err){
        res.status(401);
        console.log(err);
        throw new Error("Not auth, token failed");
    }

})



// Admin Routes

const admin = (req, res, next) => {

    if(req.user && req.user.isAdmin){
        next()
    }else {
        res.status(401);
        throw new Error("Not auth as admin");
    }

}

export {protect, admin};







