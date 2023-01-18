const mongoose = require("mongoose");

const homedeskSchema = mongoose.Schema({
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

const HomedeskModel=mongoose.model("home_desktops",homedeskSchema)


module.exports={
    HomedeskModel
}