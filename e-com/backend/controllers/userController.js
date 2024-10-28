
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";


const authUser = asyncHandler(async(req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password");
    }

    // res.send("Auth User");
})

const registerUser = asyncHandler(async(req, res) => {
    res.send("Register User");
})

const logoutUser = asyncHandler(async(req, res) => {
    res.send("logout User");
})

const getUserProfile = asyncHandler(async(req, res) => {
    res.send("get user Profile");
})

const updateUserProfile = asyncHandler(async(req, res) => {
    res.send("Update user Profile");
})

const getUsers = asyncHandler(async(req, res) => {
    res.send("Get Users");
})

const getUserById = asyncHandler(async(req, res) => {
    res.send("get user by id");
})

const deleteUser = asyncHandler(async(req, res) => {
    res.send("Delete User");
})

const updateUser = asyncHandler(async(req, res) => {
    res.send("Update User");
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}





