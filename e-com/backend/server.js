
import express from "express";

import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { notFound,errorHandler } from "./middleware/ErrorMiddlerware.js";
import cookieParser from "cookie-parser";


const app = express();




connectDB();


const port = 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(cookieParser());

app.get("/", (req, res, next) => {
    // console.log("Home");
    res.send("Home page");
    // next();
})


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

