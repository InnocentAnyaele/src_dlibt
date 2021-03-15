const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seminarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    }
}, {timestamps: true})

const Seminar = mongoose.model('seminar', seminarSchema)
module.exports = Seminar