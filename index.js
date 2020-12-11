require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./src/routes/postRoute');
const userRouter = require('./src/routes/userRoute');

const app = express();

const dbLink = process.env.DBLINK
const port = process.env.PORT

//connecting to database
mongoose.connect(dbLink,{
    useNewUrlParser : true, 
    useUnifiedTopology:true
},()=>{
    app.listen(port,()=>{
        console.info('Database is connencted! server also has started!')
    });
});

//middleware
app.use(express.json())

//routes for user
app.use(userRouter)

//routes for blog
app.use(blogRouter)


app.get('/',(req,res)=>{
    res.status(200).send("Hello,What's up")
})
