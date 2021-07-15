// import model
const Event = require('../models/eventModel')

// export a function called getAllEvents
exports.getAllEvents = (req, res) => {
    Event
    .find()
    .then(allEvents => {
        res.status(200).send(allEvents)
    })
    .catch(err => console.log(err))
}