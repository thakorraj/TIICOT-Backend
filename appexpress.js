const express=require('express');
var fs=require('fs');
var path=require('path');
var client=require('./api/client');
const app=express();



app.get('/api/client',(req,res)=>{
console.log(client);
res.send(client);
});

app.get('/api/client/:id',(req,res)=> res.send(req.params.id+" "+req.param.type+" "+req.param.color));

const PORT = 5000;

app.listen(PORT,() => console.log(`Server running port ${PORT}`));