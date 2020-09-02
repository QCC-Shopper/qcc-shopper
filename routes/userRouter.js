const express = require("express");
const userRouter = express();
const Users = require("../models/user");
const bcrypt = require("bcrypt")

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
userRouter.post("/", async (req, res, next)=>{
    const {name, email, address, password} = await req.body
    try {
        const hashPassword = await bcrypt.hash(password, 10);
    
        await Users.create({name:name, email:email, address:address, password:hashPassword, })
        console.log(hashPassword)
        res.send(`${email} was created succesfully.`)
    } catch (error) {
        res.send(`${email} already exist`)
        next(error )
    }

})
 module.exports = userRouter