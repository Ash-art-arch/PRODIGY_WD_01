const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})
const Accounts = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    balance:{type:Number,require:true}
})
const user = mongoose.model("users",userSchema)
const account = mongoose.model("account",Accounts)

module.exports = {user,account}