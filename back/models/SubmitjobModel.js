const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submitjobSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true })

const submitjob = mongoose.model('submitjob', submitjobSchema)

module.exports = submitjob