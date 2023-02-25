const express=require('express')
const connect=require("./connection/connection.js")
const route=require("./routes/userroute")
const recipeRoute=require("./routes/reciperoutes")
const {json}=require('body-parser')

const cors=require('cors')
const app=express()
connect
app.use(cors())
app.use(json())

app.use(express.json())
app.use('/user/',route)
app.use('/recipe/',recipeRoute)
// app.post('/user/register',async(req,res)=>{
//     console.log(req.body)
//     res.send(req.body)
//   })
app.get('/*',(req,res)=>{
    res.status(404).send("bad request")
})
app.post('/*',(req,res)=>{
    res.status(404).send("bad request")
})
app.listen(8080,()=>console.log("in the port"))