import express from 'express'


const app = express()
app.use(express.json())
let users = []

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
app.delete("/user/:id" , (req ,res)=>{
  const {id} = req.params
  
  users = users.filter(obj=>  obj.id !== id )
    
  res.send({message : "User Deleted Successfully !"})
})
app.put("/user/:id" , (req , res)=>{
 const {id} = req.params
 const index = users.findIndex(obj =>obj.id === id)
 users.splice(index ,1 ,{...req.body , id})
 res.send({message : "User Updated Successfully"})
})





app.listen(3000 , ()=>{
    console.log('Server is running')
})


















