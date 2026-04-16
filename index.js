import express from 'express'


const app = express()
app.use(express.json())
const users = []

app.get("/" , (req ,res) =>{
    res.send(new Date().toString())
}
)
app.post("/users" , (req ,res)=>{

    try{
    console.log("req " , req.body)
    users.push({...req.body , id :Date.now().toString(36)})
 res.send({user: req.body ,message : "User Added succesfully"})
    }
catch(err){
res.send("Something went Wrong")
}
})

app.get("/user" , (req,res)=>{
  res.send(users)
})








app.listen(3000 , ()=>{
    console.log('Server is running')
})


















