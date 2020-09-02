const express = require("express");
const userRouter = express();
const Users = require("../models/user")
const bcrypt = require('bcrypt')

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

userRouter.post('/login', async(req, res, next) => {
    try {
        const {name, password} = req.body
        const user = await Users.findAll({where: {name: username}})
        if (user.length === 0) res.send({result: 'username-not-found'})
        const check = await bcrypt.compare(password, user[0].password)
        if (check) {
            res.send({result: 'login-succesful', user: user[0]})
        } else {
            res.send({result: 'password-incorrect'})
        }
    } catch(er) {next(er)}
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
