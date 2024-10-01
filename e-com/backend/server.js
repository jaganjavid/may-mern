
import express from "express";

import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"


const app = express();


app.use(cors());

connectDB();

const port = 5000;

app.get("/", (req, res, next) => {
    console.log("Home");
    res.send("Home page");
    next();
})

app.get("/users", auth, (req, res) => {
    console.log("user page")
    res.send("users page");
})


function auth(req, res, next){
    console.log("Auth");
    next();
}

function log(req, res, next){
    console.log("LOG");
    next()
}

app.use("/api/products", productRoutes);


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

