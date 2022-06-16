const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signupSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    role: {
        type: String,
        default: "user"
    }
}, { timestamps: true })

const signup = mongoose.model('signup', signupSchema)

module.exports = signup