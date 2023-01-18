const mongoose = require("mongoose");

const businesslapSchema = mongoose.Schema({
    title: String,
    order_code: String,
    image: String,
    Processor: String,
    OS: String,
    Graphics: String,
    Memory: String,
    Storage:String,
    Display:String,
    onlineprice:Number,
    price:Number
})

const BusinesslapModel=mongoose.model("business_laptops",businesslapSchema)


module.exports={
    BusinesslapModel
}