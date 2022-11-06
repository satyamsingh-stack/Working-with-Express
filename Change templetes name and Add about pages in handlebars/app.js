const express = require('express')
const path = require('path')
const port = 4200
const app = express()

const templetespath=path.join(__dirname,'/tampletes');

app.set("view engine","hbs");
app.set('views',templetespath)
app.get("",(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port,()=>{
    console.log('Listening to port',port);
})
