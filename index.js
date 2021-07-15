
const express = require('express')// import express
const cors = require('cors')// import cors
const mongoose = require('mongoose')// import mongoose
require('dotenv/config') // importing dotenv library to use the variable


const app = express()// creating app as Express(can replace 'app' with any word
app.use(express.json())// use express and parse everything into json

// connect to mongoose
mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000)
        console.log('Listening on port 5000, and connected to mongo')
        })
    .catch(err => console.log(err))

// import the router
const eventsRoutes = require('./src/routes/eventsRoutes')
app.use(eventsRoutes)

// const newEvent = {
//     title: 'Clean up Boca Beach',
//     date: '2021-08-02',
//     description: 'Cleaning up all trash from Boca Beach',
//     cost: 'Free',
//     attendees: ['Christian', 'Mia', 'Noah', 'Emily', 'Zack']
// }

// function createEvent(){
//     new Event(newEvent)
//     .save()
//     .then(() => console.log('Event was saved'))
//     .catch(err => console.log(err))
// }

// first route(first param, second param = anon func)
// app.get('/', (req, res) => {
//     createEvent()
//     res.send('hello class, Event was created')
// })

// connecting to local host(first param = port, second is anon function)
