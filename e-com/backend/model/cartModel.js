import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    cartItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            price:{type:String, required:true},
            image:{type:String, required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            }
        }
    ],
    itemPrice:{type:Number, required:true},
    shippingPrice:{type:Number, required:true},
    taxPrice:{type:Number, required:true},
    totalPrice:{type:Number, required:true},

}, {
    timestamps:true
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

