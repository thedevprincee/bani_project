require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2345
const mongoose = require('mongoose')
const cors = require('cors')

const verifyJwt = require('./src/middleware/auth')
mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONNECTION_URI, ()=>console.log("DATABASE CONNECTED"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.use(verifyJwt)
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'OPTIONS, POST, PUT, GET, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})
app.use(cors())
app.use('/api/auth', require('./src/controllers/auth-controller'))
app.use('/api/branch', require('./src/controllers/BranchController'))
// app.use(verifyJwt)
app.use("/api/user", require('./src/controllers/account-controller'))

app.use('/api', (req, res)=>{
    res.send("API For Bani Project")
})

app.use('/', (req, res)=>{
    res.send("Welcome to Bani Project")
})

app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))
