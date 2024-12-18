import ErrorHandler from "../utils/errorHandler.js";


export default (err, req, res, next) => {

    let error = {
        statusCode:err.statusCode || 500,
        message:err.message || "Internal server Error",
    };

    // Handle Invalid Mongoose ID Error

    if(err.name === "CastError"){
        const message = `Resource not found. Invaild: ${err.path}`;

        error = new ErrorHandler(message, 404);
    }

    if(process.env.NODE_ENV === "DEVELOPMENT"){
        res.status(error.statusCode).json({
            message:error.message,
            error:err
        })
    }

    if(process.env.NODE_ENV === "PRODUCTION"){
        res.status(error.statusCode).json({
            message:error.message
        })
    }

    res.status(error.statusCode).json({
        message:error.message
    })

}