const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    useremail:{type:String,require},
    password:{type:String,require}
})

const receipe=mongoose.model("receipe",userSchema)

module.exports=receipe