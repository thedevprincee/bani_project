require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000
const mongoose = require('mongoose')
const verifyJwt = require('./src/middleware/auth')
mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONNECTION_URI, ()=>console.log("DATABASE CONNECTED"))


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/auth', require('./src/controllers/auth-controller'))
// app.use(verifyJwt)

app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))
