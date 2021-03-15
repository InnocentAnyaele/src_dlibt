const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timetableSchema = new Schema({
    title: {
        type: String
    },
    file: {
        type: String
    },
    url: {
        type: String
    }
}, {timestamps: true})

const Timetable = mongoose.model('timetable', timetableSchema)
module.exports = Timetable