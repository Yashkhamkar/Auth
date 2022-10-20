import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded())

app.use(cors());
mongoose.connect(
  "mongodb+srv://timep:x9PtyMEgOp8PaBj9@cluster0.0ahaeb9.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("database connected");
  }
);
const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  pass:String
})
const User=new mongoose.model("User",userSchema)
//routes
app.get("/",(req,res)=>{
  res.send("ggez");
})
app.post("/login", (req, res)=> {
  const { email, pass} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(pass === user.pass ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

app.post("/register", (req, res)=> {
  const { name, email, pass} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              name,
              email,
              pass
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
}) 
app.listen(9002, console.log("port stared at port 9002"));
