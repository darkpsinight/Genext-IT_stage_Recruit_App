const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    title: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    cv: {
        type: String
    },
    coverLetter: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const form = mongoose.model('form', formSchema)

module.exports = form