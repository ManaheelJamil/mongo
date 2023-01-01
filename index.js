const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.h4kl3xp.mongodb.net/test")({
userNewurlParser:true,
useUnifiedTopology:true
},()=>{
    console.log("DB Connected......")
})

app.get('/',(req,res)=>{
    res.send("hello world......");
});

app.listen(9000);
console.log("server is runing at 9000......")