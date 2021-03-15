const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    ID: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    department: {
        type: String
    },
    position: {
        type: String
    },
    reference: {
        type: String
    },
    file: {
        type: String
    }, 
    url: {
        type: String
    }
}, {timestamps: true})

const Application = mongoose.model('application', applicationSchema)
module.exports = Application 