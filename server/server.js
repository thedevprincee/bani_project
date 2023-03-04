require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2345
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONNECTION_URI, ()=>console.log("DATABASE CONNECTED"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors());

app.use((req, res, next)=>{
   res.setHeader('Access-Control-Allow-Originn', '*');
   res.setHeader('Access-Control-Allow-Method', 'OPTIONS, POST, PUT, GET, DELETE, PATCH');
   res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
   next();
})

app.use('/auth', require('./src/controllers/UserController'))
app.use('/user', require('./src/controllers/UserController'))
app.use('/branch', require('./src/controllers/BranchController'))


app.use('/', (req, res, next)=>{
    res.send("Home")
})


app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))
