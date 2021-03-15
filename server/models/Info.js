const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoSchema = new Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    // file: {
    //     type: String
    // },
    info: {
        type: String
    }
}, {timestamps: true})

const Info = mongoose.model('info', infoSchema)
module.exports = Info