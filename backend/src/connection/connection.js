const mongose=require("mongoose")

async function connect(){
    await new  mongose.connect("mongodb://localhost/mongoose")
    console.log(":::database connection done from mongose")
}
module.exports=connect()