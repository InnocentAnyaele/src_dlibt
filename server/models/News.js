const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    // file: {
    //     type: String
    // },
    link: {
        type: String
    },
    news: {
        type: String
    }
}, {timestamps: true})

const News = mongoose.model('news', newsSchema)
module.exports = News