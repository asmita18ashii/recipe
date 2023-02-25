const route=require("express").Router()
const receipe=require('../modules/recipeSchema')
const {json}=require('body-parser')
route.use(json())
route.post("/addrecipe",(req,res)=>{
        try{
            console.log(req.body,req.files)
            const {postImage}=req.files
            postImage.mv("./uploadedIMG/"+postImage.name,async(err)=>{
                // err?res.json(err.message):res.json("uploaded succesfully")
                if(err)console.log(err.message)
                else{
                    const post=({
                        ...req.body,Image_file:postImage.name
                    })
                    // console.log(post)
                    try{
                        console.log(await receipe.create(post)) 
                    }catch(e){
                        console.log(e.message)
                    }
                }
            })
            
        }
        catch(e){
            res.send(e.message)
        }
        // res.send("ok")
    })
    

route.get('/getrecipe',async(req,res)=>{
    try{
        const data=await receipe.find()
        res.status(200).json(data)
    }catch(err){
        req.status(204).send({
            status:"failed",
            message:err.message
        })
    }
})
module.exports=route