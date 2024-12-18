
import express from "express";
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from  "./middleware/error.js"


const app = express();


// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR, ${err}`);
    console.log("Shutting down due to Uncaught exceptions");
    process.exit(1);
})

dotenv.config({ path:"backend/config/config.env" });

// Connect to the DB
connectDataBase();

// console.log(hello);

// Default Middleware
app.use(express.json());

// Import all routes 
import productRoutes from "./routes/productRoutes.js";

app.use("/api/v1", productRoutes);

// Using error Middleware
app.use(errorMiddleware);


app.listen(5000, () => {
    console.log(`Server started on port : ${process.env.PORT} in ${process.env.NODE_ENV}`);
})


// Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});