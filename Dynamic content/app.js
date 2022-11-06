const express = require('express')
const path = require('path')
const port = 4200
const app = express()
//hbs stands for handlebars
app.set("view engine","hbs");

app.get("",(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log('Listening to port',port);
})
