const express=require('express');
const app=express();
const mongoose = require('mongoose');
const routeurl=require('./routes/routes');
const cors=require('cors');
app.use(express.json());
app.use(cors())

app.use("/app",routeurl);

if(mongoose.connect('mongodb+srv://pavithra:yutheekani@cluster0.q6dxyw8.mongodb.net/hospital-db?retryWrites=true&w=majority&appName=Cluster0'))
{
    console.log('database is connected');
}
app.listen(4000,()=>
{
    console.log('server is connected');
})