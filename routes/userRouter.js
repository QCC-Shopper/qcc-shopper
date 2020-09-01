const express = require("express");
const userRouter = express();
const Users = require("../models/user")

userRouter.get("/", async (req, res, next)=>{
    try{
        const users = await Users.findAll()
        res.send(users)
    }catch(err){next(err)}
}),

userRouter.get("/:id", async (req, res, next)=>{
    try{
        
        const singleUser = await Users.findOne({
            where:{id:req.params.id}
        })
        res.send(singleUser)
    }catch(err){next(err)}
})
 module.exports = userRouter