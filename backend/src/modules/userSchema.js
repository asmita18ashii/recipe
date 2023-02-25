const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    useremail:{type:String,require},
    password:{type:String,require}
})

const usermodel=mongoose.model("user",userSchema)

module.exports=usermodel