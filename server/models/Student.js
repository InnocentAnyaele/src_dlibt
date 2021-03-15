const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const Student = mongoose.model('student', studentSchema)
module.exports = Student 