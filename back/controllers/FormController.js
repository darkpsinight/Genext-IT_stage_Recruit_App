const { Mongoose } = require('mongoose')
const form = require('../models/FormModel')


module.exports = {
    store: (req, res, next) => {
        let candidate = new form({
            title: req.body.title,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            coverLetter: req.body.coverLetter,
            cv: req.body.cv
        })
        if (req.file) {
            candidate.cv = req.file.path
        }
        candidate.save()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Candidate added successfully!',
                    data: candidate,
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
    updateScore: (req, res, next) => {

        console.log("Update===>>", req.params.id)


        form.updateOne({ _id: req.params.id }, { $set: { score: req.body.score } })
            .then(response => {
                res.json({
                    success: true,
                    message: 'Score updated successfully!',
                    data: response,
                })
            })
            .catch(
                error => {
                    console.log(error);
                }
            )
    },
    getAll: (req, res, next) => {
        form.find()
            .then(response => {
                res.json({
                    success: true,
                    message: 'Candidates fetched successfully!',
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