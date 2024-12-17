
import express from "express";
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";


const app = express();


// dotenv.config({ path:"backend/config/config.env" });

const port = 5000;

// Connect to the DB
connectDataBase();

// Default Middleware
app.use(express.json());

// Import all routes 
import productRoutes from "./routes/productRoutes.js";

app.use("/api/v1", productRoutes);




app.listen(5000, () => {
    console.log(`Server started on port : ${port}`);
})