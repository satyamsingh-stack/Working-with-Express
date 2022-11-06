const express = require('express')
const path = require('path')
const port = 4200
const app = express()

const staticPath=path.join(__dirname,'/public')
app.use(express.static(staticPath))

app.listen(port,()=>{
    console.log('Listening to port',port);
})