const express = require("express")
const mongoose = require("mongoose");
const { BusinessdeskModel } = require("../model/businessdesk.model");
const { BusinesslapModel } = require("../model/businesslap.model");
const { HomedeskModel } = require("../model/homedesk.model");
const { HomelapModel } = require("../model/homelap.model");

const {authenticate}=require("../middlewares/authenticate.middleware");
const { CartModel } = require("../model/cart.model");

const productRoute = express.Router();
productRoute.use(express.json())



productRoute.get("/homedesktops/:title", async (req, res) => {
    const {title} = req.params;
    const data = await HomedeskModel.find({ title: { $regex: title, $options: "i" } })
    res.send(data)
})

productRoute.get("/homedesktops/", async (req, res) => {
   
    const data = await HomedeskModel.find()
    res.send(data)
})

productRoute.get("/businessdesktops/:title", async (req, res) => {
    const {title} = req.params;
    const data = await BusinessdeskModel.find({ title: { $regex: title, $options: "i" } })
    res.send(data)
})

productRoute.get("/businessdesktops/", async (req, res) => {
   
    const data = await BusinessdeskModel.find()
    res.send(data)
})



productRoute.get("/businesslaptops/:title", async (req, res) => {
    const {title} = req.params;
    const data = await BusinesslapModel.find({ title: { $regex: title, $options: "i" } })
    res.send(data)
})

productRoute.get("/businesslaptops/", async (req, res) => {
   
    const data = await BusinesslapModel.find()
    res.send(data)
})

productRoute.get("/homelaptops/:title", async (req, res) => {
    const {title} = req.params;
    const data = await HomelapModel.find({ title: { $regex: title, $options: "i" } })
    res.send(data)
})

productRoute.get("/homelaptops/", async (req, res) => {
   
    const data = await HomelapModel.find()
    res.send(data)
})


 


// POST

productRoute.post("/homedesktops",async(req,res)=>{
const data=req.body;
    try {
      const pro=new HomedeskModel(data)
      await pro.save()
        res.send("Data is added to DB")

    }
    catch (err) {
        res.send({ "err": "something went wrong" })
    }

})

productRoute.post("/homelaptops",async(req,res)=>{
    const data = req.body;

    try {
      const pro=new HomelapModel(data)
      await pro.save()
      res.send("Data is added to DB")

 }
 catch (err) {
     res.send({ "err": "something went wrong" })
 }
})

productRoute.post("/businesslaptops",async(req,res)=>{
    const data = req.body;

    try {
      const pro=new BusinesslapModel(data)
      await pro.save()
        
        res.send("Data is added to DB")

    }
    catch (err) {
        res.send({ "err": "something went wrong" })
    }
})

productRoute.post("/businessdesktops",async(req,res)=>{
    const data = req.body;

    try {
      const pro=new BusinessdeskModel(data)
      await pro.save()
        res.send("Data is added to DB")

    }
    catch (err) {
        res.send({ "err": "something went wrong" })
    }
})




// PATCH


productRoute.patch("/businesslaptops",(req,res)=>{
    
})

productRoute.patch("/businessdesktops",(req,res)=>{
    
})

productRoute.patch("/homedesktops",(req,res)=>{
    
})

productRoute.patch("/homelaptops",(req,res)=>{
    
})


//DELETE

productRoute.delete("/businesslaptops",(req,res)=>{
    
})

productRoute.delete("/businessdesktops",(req,res)=>{
    
})

productRoute.delete("/homelaptops",(req,res)=>{
    
})

productRoute.delete("/homedesktops",(req,res)=>{
    
})


productRoute.use(authenticate)

productRoute.post("/addtocart",async(req,res)=>{
    const data=req.body;
    try {
      const pro=new CartModel(data)
      await pro.save()
        res.send("Data is added to DB")

    }
    catch (err) {
        res.send({ "err": "something went wrong" })
    }
})

productRoute.get("/cart/:userID",async(req,res)=>{
    const {userID} = req.params;
    const data = await CartModel.find({ userID: { $regex: userID, $options: "i" } })
    //res.send(data)

    const userid_in_req=payload.userID;
    const userid_in_doc=data[0].userID;
    
    try{
        if(userid_in_req!==userid_in_doc)
        {
            res.send({"message":"you arenot authorised"})
        }
        else{
            const data = await CartModel.find({ userID: { $regex: userID, $options: "i" } })
            res.send(data)
        }

    }
    catch(err)
    {
          console.log(err)
          res.send("error")
    }
})



module.exports={
    productRoute
}