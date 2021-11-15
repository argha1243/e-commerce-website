const express = require('express');
const mongoose1 = require('mongoose');
require('dotenv').config()

// app
const app =express()
const port =  process.env.port || 8000


//db
mongoose1.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=>console.log('DB Connected'));

// routes
app.get('/',(req,res) =>{
    res.send('hello from node')
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
