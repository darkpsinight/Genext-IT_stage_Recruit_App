const { Mongoose } = require('mongoose')
const signup = require('../models/SignupModel')


module.exports = {
    store: (req, res, next) => {
        let member = new signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth,
            role: req.body.role
        })
        member.save()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Member added successfully!',
                    data: member,
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
        form.find()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Members fetched successfully!',
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