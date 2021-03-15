const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const voteSchema = new Schema({
//     id: {
//         type: String
//     },
//     name: {
//         type: String
//     }
// })

const voterSchema = new Schema({
    password: {
        type: String
    },
    id: {
        type: String
    },
    // vote: [voteSchema]
}, {timestamps: true})

const Voter = mongoose.model('Voter', voterSchema)
module.exports = Voter