const express = require('express');
const app = express();

app.get('/sell',(req,res)=>{
    res.sendFile(__dirname+'sell.html');
})

app.get('buy',(req,res)=>{
    res.sendFile(__dirname+'buy.html');
})

app.listen(3000, ()=>{
    console.log('listening');
})