import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[false, "Please enter a product name"],
        maxLength:[200, "Product name cannot exceed 200 chars"]
    },
    price:{
        type:Number,
        required:[false, "Please enter a product price"],
        maxLength:[5, "Product name cannot exceed 5 chars"]
    },
    description:{
        type:String,
        required:[false, "Please enter a product desc"],
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:false
            },
            url:{
                type:String,
                required:false
            }
        }
    ],
    category:{
        type:String,
        required:[false, "Please enter your producr category"],
        enum:{
            values:[
              "Food",
              "Books",
              "Sports"
            ],
            message:"Please Select correct category"
        }
    },
    seller:{
        type:String,
        required:[false, "Please enter a seller"],
    },
    stock:{
        type:Number,
        required:[false, "Please enter product stock"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:false
            },
            rating:{
                type:Number,
                required:false
            },
            comment:{
                type:String,
                required:false
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false
    },
    // createAt:{
    //     type:Date,
    //     default:Date.now()
    // }

}, {timestamps:true}
);

export default mongoose.model("Product", productSchema);