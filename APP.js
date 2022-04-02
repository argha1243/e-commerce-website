const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
const morgan =  require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator= require('express-validator')
require('dotenv').config()

// app
const app =express()
const port =  process.env.port || 8000


//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useCreateIndex: true
}).then(()=>console.log('DB Connected'));

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());
//routes middleware
app.use('/api',userRoutes);

// // routes
// app.get('/',(req,res) =>{
//     res.send('hello from node')
// });

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
