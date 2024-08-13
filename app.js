const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    console.log(req)
    res.json({
        message: "This is home page"
    })
})

app.listen(3000,()=>{
    console.log("NodeJS project has started")
})