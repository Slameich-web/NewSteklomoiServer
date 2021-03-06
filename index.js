const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get("serverPort")
const authRouter = require("./routes/auth.routes")

app.use(express.json())
app.use("api/auth", authRouter)

const start = async() =>{
    try{
        await mongoose.connect(config.get("dbUrl"),{ useNewUrlParser: true, useUnifiedTopology: true })


        app.listen(PORT, () =>{
            console.log(PORT)
        })
    } catch(e){
        console.log(e)
    }
}
start()
