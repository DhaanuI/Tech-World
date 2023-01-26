const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken")
const userRoute = express.Router();
userRoute.use(express.json())
const bcrypt = require('bcrypt');

userRoute.get("/",async(req,res)=>{
    try{
        const data=await UserModel.find();
        res.send(data)
    }
    catch(err)
    {
        console.log(err)
        res.send({ "message": "something went wrong" });
    }
})

userRoute.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, encrypted_password) => {
            if (err) {
                console.log(err)
                res.send("error")
            }
            else {
                const data = new UserModel({ firstname, lastname, email, password: encrypted_password })
                await data.save();
                res.send({ "message": "User registered successfully" })
            }
        })
    }
    catch (err) {
        console.log(err)
        res.send({ "message": "something went wrong" });
    }
})

userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        //console.log(user.firstname)
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userID: user[0]._id }, 'key');
                    res.send({ "message": "Login done", "token": token ,"name":user[0].firstname})
                }
                else {
                    res.send({ "message": "wrong credentials" })
                }
            });
        }
        else {
            res.send({ "message": "wrong credentials" })
        }
    }
    catch (err) {
        console.log(err)
        res.send({ "message": "wrong credentials" });
    }
})

module.exports={
    userRoute
}