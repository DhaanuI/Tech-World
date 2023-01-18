const mongoose = require("mongoose");

const businessdeskSchema = mongoose.Schema({
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

const BusinessdeskModel=mongoose.model("business_desktops",businessdeskSchema)


module.exports={
    BusinessdeskModel
}