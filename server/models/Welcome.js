const mongoose = require('mongoose')
const Schema = mongoose.Schema

const welcomeSchema = new Schema({
    message: {
        type: String
    }
}, {timestamps: true})

const Welcome = mongoose.model('welcome', welcomeSchema)
module.exports = Welcome