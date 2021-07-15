
const express = require('express')// import express
const cors = require('cors')// import cors
const mongoose = require('mongoose')// import mongoose
require('dotenv/config') // importing dotenv library to use the variable


const app = express()// creating app as Express(can replace 'app' with any word
app.use(express.json())// use express and parse everything into json

// connect to mongoose
mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo...'))
    .catch(err => console.log(err))

// first route(first param, second param = anon func)
app.get('/', (req, res) => {
    res.send('hello class')
})

// connecting to local host(first param = port, second is anon function)
app.listen(5000, (req, res) => {
    console.log('Listening on port 5000...')
})