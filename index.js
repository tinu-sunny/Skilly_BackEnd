const express = require('express')
require('dotenv').config()
const cors =require('cors')
const route=require('./router/route')
require("./config/db")

//lve chat
const http = require("http")
const { Server } = require('socket.io')



const serverSkilly = express()
serverSkilly.use(cors())

serverSkilly.use(express.json())
serverSkilly.use(route)
serverSkilly.use('/uploads',express.static('./uploads'))

serverSkilly.get('/',(req,res)=>{
    res.send("welcome to skilly Backend")
})

// create http server
const httpServer = http.createServer(serverSkilly)
// attach socket io

const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})

// 🔹 Socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id)

  socket.on("send_message", (data) => {
    io.emit("receive_message", data)
  })

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id)
  })
})

// 🔹 Start server
httpServer.listen(3000, () => {
  console.log("server is on the port 3000")
})

// serverSkilly.listen(3000,()=>{console.log("server is on the port 3000");
// }) 