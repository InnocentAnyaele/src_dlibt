const mongoose = require('mongoose')
const Schema = mongoose.Schema


// const pollOptionSchema = new Schema({
//     name: {
//         type: String
//     },
//     optionVoters: []
// })

const pollSchema = new Schema ({
    name: {
        type: String
    },
    pollOption: [{
        name: String,
        optionVoters: []
    }],
    pollVoters: []
}, {timestamps: true})

const Poll = mongoose.model('Poll', pollSchema)
module.exports = Poll