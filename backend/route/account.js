const express = require("express")
const {account, user} = require("../model/user")
const { authMiddleware } = require("../middleware")
const accountRouter = express.Router()

accountRouter.get("/balance",authMiddleware,async (req,res)=>{
    console.log(req.userId)
        const sender=await account.findOne({userId:req.userId})
        if(!sender){
            return res.status(400).json({})
        }
        res.status(200).json({balance:sender.balance})
})
accountRouter.post("/transfer",authMiddleware,async (req,res)=>{
    const {to,amount}=req.body;
    const sender = await account.findOne({userId:req.userId})
    const receiver = await account.findOne({userId:to})
    if(amount>sender.balance){
       return res.status(403).json({message:"Insufficient balance"})
    }
    if(!receiver){
       return res.status(403).json({message:"Invalid Account"})
        
    }
    await account.updateOne({userId:req.userId},{
        $inc:{
            balance: -amount
        }
    })
    await account.updateOne({userId:to},
        {
            $inc:{
                balance:+amount
            }
        })
        req.json({
            message:"transfer done"
        })
})

module.exports = accountRouter