const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to my Home Page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})

app.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page");
})

app.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name:"Satyam Singh"
    });
})
port = 4200;
app.listen(4200,()=>{
    console.log("Lestining the port",port);
})
