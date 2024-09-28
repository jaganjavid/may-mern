
import express from "express";
import products from "./data/products.js";
import cors from "cors"

const app = express();
app.use(cors());


const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello world !");
})

app.get("/api/products", (req, res) => {
    
    res.json(products);
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

