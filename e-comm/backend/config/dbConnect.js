import mongoose from "mongoose";


export const connectDataBase = () => {

    const DB_LOCAL_URI = ""

    mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
        console.log(`Mongo database connected with host : ${con.connection.host}`);
    }).catch(function(err){
        console.log(err.message);
    })


}