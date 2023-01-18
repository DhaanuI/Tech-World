const mongoose = require("mongoose");

const homelapSchema = mongoose.Schema({
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

const HomelapModel=mongoose.model("home_laptops",homelapSchema)


module.exports={
    HomelapModel
}