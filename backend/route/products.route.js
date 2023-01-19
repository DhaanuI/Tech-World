const express = require("express")
const mongoose = require("mongoose");
const { BusinessdeskModel } = require("../model/businessdesk.model");
const { BusinesslapModel } = require("../model/businesslap.model");
const { HomedeskModel } = require("../model/homedesk.model");
const { HomelapModel } = require("../model/homelap.model");

const {authenticate}=require("../middlewares/authenticate.middleware")

const productRoute = express.Router();
productRoute.use(express.json())

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


productRoute.post("/cart",async(req,res)=>{
    const data=req.body
    try{
      

    }
    catch(err)
    {
      console.log(err)
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





module.exports={
    productRoute
}