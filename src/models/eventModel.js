const mongoose = require('mongoose')// import mongoose

// schema to control type of data(schema = a set of rules coming from mongoose; a schema is a function tht takes in an object)
const EventSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    cost: String,
    attendees: Array
})

module.exports = mongoose.model('Event', EventSchema) // create model from schema