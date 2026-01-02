const express = require('express')
require('dotenv').config()
const cors =require('cors')
const route=require('./router/route')
require("./config/db")


const serverSkilly = express()
serverSkilly.use(cors())

serverSkilly.use(express.json())
serverSkilly.use(route)

serverSkilly.get('/',(req,res)=>{
    res.send("welcome to skilly Backend")
})

serverSkilly.listen(3000,()=>{console.log("server is on the port 3000");
}) 