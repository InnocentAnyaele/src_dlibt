const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    title: {
        type: String
    },
    file: {
        type: String
    },
    url : {
        type: String,
        required: true
    }
}, {timestamps: true})

const Budget = mongoose.model('budget', budgetSchema)
module.exports = Budget