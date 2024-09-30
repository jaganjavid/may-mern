// 

import mongoose from "mongoose";

const connectDB = async () => {

    try {

        const connect = await mongoose.connect("mongodb+srv://jagan:jagan123@ecom.nsfoe.mongodb.net/ecom")

        console.log(`MongoDB Connected successfully`);
    } catch (err) {

        console.log(`Error Message : ${err.message}`);
        process.exit(1);

    }

};

export default connectDB;