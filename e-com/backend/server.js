
import express from "express";

import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { notFound,errorHandler } from "./middleware/ErrorMiddlerware.js";


const app = express();


app.use(cors());

connectDB();


const port = 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

