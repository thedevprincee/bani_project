require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000
const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONNECTION_URI, ()=>console.log("DATABASE CONNECTED"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/auth', require('./src/controllers/UserController'))
app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))
