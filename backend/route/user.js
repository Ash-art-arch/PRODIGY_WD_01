    const express = require("express")
    const {user,account} = require("../model/user")
    const userRouter = express.Router()
    const jwt = require("jsonwebtoken")
    const { authMiddleware } = require("../middleware")
    
    userRouter.post("/register", async (req, res) => {
        const {firstName,lastName,email,password} = req.body;
        console.log(req.body)

        const userDoc = await user.create({
            firstName:firstName,
            lastName:lastName, 
            email:email,
            password:password
        })
        const userid = userDoc._id
        if(userDoc){

            jwt.sign({userId:userDoc._id,email:userDoc.email},"asdajnfjsabfjs",{},async (err,token)=>{
                if(err) throw err;
                await account.create({
                    userId:userid,
                    balance:Math.floor(Math.random()*10000)
                })
                res.send({user:userDoc,token}).status(200)
            })
        }
        else{
            res.status(411).json("User already exists")
        }
    })
    userRouter.post("/login",async(req,res)=>{
        const {email,password} = req.body;
        const userDoc = await user.findOne({email});
        const isOk=(password===userDoc.password);
        if(isOk){
            jwt.sign({userId:userDoc._id,email:userDoc.email},"asdajnfjsabfjs",{},(err,token)=>{
                if(err) throw err;
                res.send({token:token}).status(200)
            })
        }
        else{
            res.status(411).json({message:"Error while logging in"})
        }
    })
    userRouter.put("/",authMiddleware,async(req,res)=>{
        await user.updateOne({_id:req.userId},req.body)
        res.json({
            message:"Profile updated successfully"
        })
    })
    userRouter.get("/bulk",authMiddleware,async(req,res)=>{
        const firstName = req.query.filter||"";
        const userDoc = await user.find({
            $or:[
                {firstName:{$regex:firstName}},
                {lastName:{$regex:firstName}}
            ]
        })
        if(userDoc){
            res.json({users:userDoc.map(user=>({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))})
        }
        else{
            res.json({message:"User not found"})
        }
    })
    module.exports=userRouter