
import products from "./data/products.js";
import users from "./data/users.js";

import User from "./model/userModel.js";
import Product from "./model/productModel.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {

    try {

        await User.deleteMany();
        await Product.deleteMany();

        const createUsers = await User.insertMany(users);

        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        });

        await Product.insertMany(sampleProducts);

        console.log("Data Imported");

        process.exit();



    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

const destroyData = async () => {

    try {

        await User.deleteMany();
        await Product.deleteMany();

        console.log("Data Destroyed");

        process.exit();

    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}


if(process.argv[2] === "-d"){
    destroyData();
}else{
    importData();
}