const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
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

const Gallery = mongoose.model('gallery', gallerySchema)
module.exports = Gallery