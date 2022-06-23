const { Mongoose } = require('mongoose')
const submitjob = require('../models/SubmitjobModel')


module.exports = {
    store: (req, res, next) => {
        let job = new submitjob({
            title: req.body.title,
            description: req.body.description
        })
        job.save()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Job added successfully!',
                    data: job,
                })
            })
            .catch(error => {
                res.json({
                    success: false,
                    message: 'An error occured!',
                    error: error,
                })
            })
    },
    getAll: (req, res, next) => {
        submitjob.find()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Jobs fetched successfully!',
                    data: response,
                })
            }
            )
            .catch(error => {
                res.json({
                    success: false,
                    message: 'An error occured!',
                    error: error,
                })
            }
            )
    }
}