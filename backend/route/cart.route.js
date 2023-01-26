const express = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
// const { BusinessdeskModel } = require("../model/businessdesk.model");
// const { BusinesslapModel } = require("../model/businesslap.model");
// const { HomedeskModel } = require("../model/homedesk.model");
const { HomelapModel } = require("../model/homelap.model");

const { authenticate } = require("../middlewares/authenticate.middleware");
const { CartModel } = require("../model/cart.model");

const cartRoute = express.Router();
cartRoute.use(express.json())


cartRoute.use(authenticate)


cartRoute.post('/:productID', async (req, res) => {
    let productID = req.params.productID;
    let token = req.headers.authorization
    let userID = jwt.verify(token, "key");

    try {
        let cartproduct = new CartModel({ productID, userID: userID.userID });
        await cartproduct.save()
        res.send({ msg: "product added" })
    }
    catch (error) {
        res.send({ msg: "Error occured" })
    }
})

cartRoute.get('/', async (req, res) => {
    let userID = jwt.verify(req.headers.authorization, "key");
    try {
        let productIds = await CartModel.find({ userID: userID.userID });
        if (productIds.length) {
            let products = [];
            for (let i of productIds) {
                let product = await HomelapModel.findById({ _id: i.productID });
                products.push(product);

            }
            res.send(products);
        } else {
            res.send([]);
        }

    } catch (error) {
        res.send({ msg: "Something went Wrong" })
    }
})


cartRoute.delete('/delete/:id', async (req, res) => {
    let ID = req.params.id;

    const data = await CartModel.find({ productID: ID });
    let token = req.headers.authorization
    let userID = jwt.verify(token, "key");
    const userid_in_doc = data[0].userID

    try {
        if (userID.userID !== userid_in_doc) {
            res.send({ "message": "you arenot authorised" })
        }
        else {
            await CartModel.findOneAndDelete({ productID: ID })
            res.send("Particular data has been deleted")
        }
    }
    catch (err) {
        console.log(err)
        res.send("no you cannnot delete")
    }
})
module.exports = {
    cartRoute
}