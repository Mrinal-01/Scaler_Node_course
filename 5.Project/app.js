const express=require('express')
const mongoose=require('mongoose')
const categories=require("./Routes/categories")
const students=require('./Routes/students')
const app=express()

mongoose.connect('mongodb://127.0.0.1/LearningPlatform')
.then(()=>console.log("Connection is successful"))
.catch(err=> console.error('Could not connect to mongodb',err))


app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students)
const port=process.env.PORT||5500;
app.listen(port,()=>console.log(`Listen on port ${port}`))