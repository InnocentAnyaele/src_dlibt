const mongoose = require('mongoose')
const Schema = mongoose.Schema

const srcSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const Src = mongoose.model('src', srcSchema)
module.exports = Src 