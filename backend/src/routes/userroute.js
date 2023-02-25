const route=require('express').Router()
const bodyParser=require('body-parser')
const usermodel=require('../modules/userSchema')
const bcrypt=require('bcrypt')
const {json}=require('body-parser')

route.use(json())
// route.post("/login",(req,res)=>{
//   console.log(req.body)
//   res.send("welcom")
// })

route.post('/login',(req,res)=>{
    try {
      const { mailID, password } = req.body;
      if (!mailID || !password) {
        return res.status(422).json({
          error: "add all the fields"
        })
      }
      const userData =  UUser.findOne({ mailID })
      if (!userData) {
        return res.status(404).json({
          error: "user not found"
        })
      }
      bcrypt.compare(password, userData.password, function (err, result) {
        if (err) {
          return res.status(500).json({
            error: err.message
          })
        }
        if (result) {
          const token = jwt.sign({ _id: userData.id }, jwt_token)
          const { _id, mailID, password, customId } = userData
          return res.json({
            token: token,
            user: { _id, mailID, password, customId },
            message: "user logged in successully"
          })
        }
        else {
          return res.status(500).json({
            error: "password not matched"
          })
        }
      })
    } catch (e) {
      return res.status(500).json({
        error: e.message
      })
    }
  })

route.post('/register',async(req,res)=>{
  try {
    const { mailID, password } = req.body;
    if (!mailID || !password) {
      return res.status(422).json({
        error: "add all the fields"
      })
    }
    const userData =  UUser.findOne({ mailID })
    if (!userData) {
      return res.status(204).json({
        error: "user allready exist"
      })
    }
    
    bcrypt.hash(password,10,function (err, result) {
      if (err) {
        return res.status(500).json({
          error: err.message
        })
      }
      if (result) {
        const token = jwt.sign({ _id: userData.id }, jwt_token)
        const { _id, mailID, password, customId } = userData
        return res.json({
          token: token,
          user: { _id, mailID, password, customId },
          message: "user logged in successully"
        })
      }
      else {
        return res.status(500).json({
          error: "password not matched"
        })
      }
    })
  } catch (e) {
    return res.status(500).json({
      error: e.message
    })
  }
})

route.post('/*',(req,res)=>{
  res.status(404).send("bad request")
})
module.exports=route