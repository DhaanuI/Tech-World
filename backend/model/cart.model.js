const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productID:String,
    userID:String
})

const CartModel=mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}