require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database/index.js')
const app = express()

connectToDatabase()

app.get("/",(req,res)=>{
    console.log(req)
    res.status(200).json({
        message: "This is home page"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("NodeJS project has started")
})

//mongodb+srv://poozagrg432:<password>@cluster0.gdjpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0