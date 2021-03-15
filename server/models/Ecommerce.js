const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ecommerceSchema = new Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    price: {
        type: String
    },
    info: {
        type: String
    },
    file: {
        type: String
    },
    type: {
        type: String
    },
    url: {
        type: String
    }
}, {timestamps: true})

const Ecommerce = mongoose.model('ecommerce', ecommerceSchema)
module.exports = Ecommerce