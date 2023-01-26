const express = require("express")
const app = express();
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const { connection } = require("./config/db");
const { productRoute } = require("./route/products.route");
const { userRoute } = require("./route/user.route");
const { cartRoute } = require("./route/cart.route");

app.use(cors())

app.use("/products", productRoute)
app.use("/users", userRoute)
app.use('/cart', cartRoute)

app.get("/", (req, res) => {
    res.send("Homepage")
})


app.listen(process.env.port, async (req, res) => {
    try {
        await connection
        console.log("DB is connected")
    }
    catch (err) {
        console.log(err)

    }
    console.log("server is running")
})