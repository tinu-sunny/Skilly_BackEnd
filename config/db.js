const mongoose = require('mongoose')
// const connectionString ='mongodb+srv://skilly:skilly@cluster0.pzct9lz.mongodb.net/skilly?appName=Cluster0'
mongoose.connect(process.env.connectionString).then(res=>{
    console.log("db connected");

    
})

.catch(err=>{
    console.log("error"+err);
    
})