// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// Routes
app.get('/', (req, res) => {
    res.send('Books API')
})

// LISTEN
app.listen(process.env.PORT) 
    console.log('listening on port', PORT);