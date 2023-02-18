require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 6000

app.use(express.urlencoded({extended: false}))
app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))